const btnCreateDbAndTable = document.getElementById('btn-create-db-table');
const btnAddRecord = document.getElementById('btn-add-record');
const btnReadRecord = document.getElementById('btn-read-record');
const btnUpdateRecord = document.getElementById('btn-update-record');
const btnDeleteRecord = document.getElementById('btn-delete-record');
const btnDeleteTable = document.getElementById('btn-delete-table');
const btnDeleteDatabase = document.getElementById('btn-delete-database');
const btnGetAllRecords = document.getElementById('btn-get-all-records');
const btnGetAllTables = document.getElementById('btn-get-all-tables');
const btnGetAllUsers = document.getElementById('btn-get-all-users');
const tableName = document.getElementById('tableName');

let db;

btnCreateDbAndTable.addEventListener('click', () => {
    const dbName = document.getElementById('dbName').value;
    const request = indexedDB.open(dbName, 1);

    request.addEventListener('upgradeneeded', (event) => {
        db = event.target.result;
        console.log(`Database ${dbName} created`);

        if (!db.objectStoreNames.contains(tableName.value)) {
            const objectStore = db.createObjectStore(tableName.value, { keyPath: 'id', autoIncrement: true });

            objectStore.add({ name: 'John', family: 'Doe', age: 25 });
            objectStore.add({ name: 'Jane', family: 'Smith', age: 30 });
            objectStore.add({ name: 'arash', family: 'altafi', age: 35 });
            console.log(`Table ${tableName.value} created`);

            if (!objectStore.indexNames.contains('ageIndex')) {
                objectStore.createIndex('ageIndex', 'age', { unique: false });
            }
        } else {
            console.log(`Table ${tableName.value} exists`);
        }
    })

    request.addEventListener('success', (event) => {
        db = event.target.result;
        console.log(`Connected to ${dbName}`);
    })

    request.addEventListener('error', (event) => {
        console.error('Error creating database:', event.target.error);
    })
});

btnAddRecord.addEventListener('click', () => {
    const key = document.getElementById('recordKey').value;
    const value = document.getElementById('recordValue').value;

    const transaction = db.transaction([tableName.value], 'readwrite');
    const objectStore = transaction.objectStore(tableName.value);
    const request = objectStore.add({ key, value });

    request.onsuccess = function (event) {
        console.log('Record added successfully');
    };

    request.onerror = function (event) {
        console.error('Error adding record:', event.target.error);
    };
});

btnReadRecord.addEventListener('click', () => {
    const key = document.getElementById('readKey').value;

    const transaction = db.transaction([tableName.value], 'readonly');
    const objectStore = transaction.objectStore(tableName.value);
    const request = objectStore.get(key);

    request.onsuccess = function (event) {
        const record = event.target.result;
        if (record) {
            console.log('Record read successfully:', record);
        } else {
            console.log('Record not found');
        }
    };

    request.onerror = function (event) {
        console.error('Error reading record:', event.target.error);
    };
});

btnUpdateRecord.addEventListener('click', () => {
    const key = document.getElementById('updateKey').value;
    const updatedValue = document.getElementById('updateValue').value;

    const transaction = db.transaction([tableName.value], 'readwrite');
    const objectStore = transaction.objectStore(tableName.value);
    const request = objectStore.put({ key, value: updatedValue });

    request.onsuccess = function (event) {
        console.log('Record updated successfully');
    };

    request.onerror = function (event) {
        console.error('Error updating record:', event.target.error);
    };
});

btnDeleteRecord.addEventListener('click', () => {
    const key = document.getElementById('deleteKey').value;

    const transaction = db.transaction([tableName.value], 'readwrite');
    const objectStore = transaction.objectStore(tableName.value);
    const request = objectStore.delete(key);

    request.onsuccess = function (event) {
        console.log('Record deleted successfully');
    };

    request.onerror = function (event) {
        console.error('Error deleting record:', event.target.error);
    };
})

btnDeleteDatabase.addEventListener('click', () => {
    const dbName = document.getElementById('dbName').value;
    const request = indexedDB.deleteDatabase(dbName);

    request.onsuccess = function (event) {
        console.log(`Database ${dbName} deleted successfully`);
    };

    request.onerror = function (event) {
        console.error('Error deleting database:', event.target.error);
    };
});

btnGetAllRecords.addEventListener('click', () => {
    // Create a transaction
    const transaction = db.transaction(tableName.value, 'readonly');

    // Open the object store
    const objectStore = transaction.objectStore(tableName.value);

    // Get all records
    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = function (event) {
        const allRecords = event.target.result;
        console.log(allRecords);
    };

    getAllRequest.onerror = function (event) {
        console.error('Error getting all records: ' + event.target.errorCode);
    };
});

btnGetAllTables.addEventListener('click', () => {
    const objectStoreNames = db.objectStoreNames;
    const objectStoreNamesArray = Array.from(objectStoreNames);
    console.log(objectStoreNamesArray);
});

btnDeleteTable.addEventListener('click', () => {
    const request = indexedDB.deleteDatabase(tableName.value);

    request.onsuccess = function (event) {
        console.log(`Table ${tableName.value} deleted successfully`);
    };

    request.onerror = function (event) {
        console.error('Error deleting table:', event.target.error);
    };
})

btnGetAllUsers.addEventListener('click', () => {
    const transaction = db.transaction(tableName.value, 'readonly');
    const objectStore = transaction.objectStore(tableName.value);
    const index = objectStore.index('ageIndex');
    const ageGreaterThan20Request = index.openCursor(IDBKeyRange.upperBound(30));

    ageGreaterThan20Request.onsuccess = function (event) {
        const cursor = event.target.result;

        if (cursor) {
            // Print the name and family for records where age > 20
            console.log('Name:', cursor.value.name, 'Family:', cursor.value.family);
            cursor.continue();
        }
    };

    ageGreaterThan20Request.onerror = function (event) {
        console.error('Error getting records:', event.target.errorCode);
    };
})