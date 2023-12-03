const btnCreateDbAndTable = document.getElementById('btn-create-db-table');
const btnAddRecord = document.getElementById('btn-add-record');
const btnReadRecord = document.getElementById('btn-read-record');
const btnUpdateRecord = document.getElementById('btn-update-record');
const btnDeleteRecord = document.getElementById('btn-delete-record');
const btnDeleteTable = document.getElementById('btn-delete-table');
const btnDeleteDatabase = document.getElementById('btn-delete-database');
const btnGetAllRecords = document.getElementById('btn-get-all-records');
const btnGetAllTables = document.getElementById('btn-get-all-tables');

let db;

btnCreateDbAndTable.addEventListener('click', () => {
    const dbName = document.getElementById('dbName').value;
    const request = indexedDB.open(dbName, 3);

    request.addEventListener('upgradeneeded', (event) => {
        db = event.target.result;
        console.log(`Database ${dbName} created`);

        const tableName = document.getElementById('tableName').value;
        const objectStore = db.createObjectStore(tableName, { keyPath: 'key', autoIncrement: true });
        console.log(`Table ${tableName} created`);

        // You can create indexes here if needed
        // const index = objectStore.createIndex('indexName', 'property');
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
    const tableName = document.getElementById('tableName').value;
    const key = document.getElementById('recordKey').value;
    const value = document.getElementById('recordValue').value;

    const transaction = db.transaction([tableName], 'readwrite');
    const objectStore = transaction.objectStore(tableName);
    const request = objectStore.add({ key, value });

    request.onsuccess = function (event) {
        console.log('Record added successfully');
    };

    request.onerror = function (event) {
        console.error('Error adding record:', event.target.error);
    };
});

btnReadRecord.addEventListener('click', () => {
    const tableName = document.getElementById('tableName').value;
    const key = document.getElementById('readKey').value;

    const transaction = db.transaction([tableName], 'readonly');
    const objectStore = transaction.objectStore(tableName);
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
    const tableName = document.getElementById('tableName').value;
    const key = document.getElementById('updateKey').value;
    const updatedValue = document.getElementById('updateValue').value;

    const transaction = db.transaction([tableName], 'readwrite');
    const objectStore = transaction.objectStore(tableName);
    const request = objectStore.put({ key, value: updatedValue });

    request.onsuccess = function (event) {
        console.log('Record updated successfully');
    };

    request.onerror = function (event) {
        console.error('Error updating record:', event.target.error);
    };
});

btnDeleteRecord.addEventListener('click', () => {
    const tableName = document.getElementById('tableName').value;
    const key = document.getElementById('deleteKey').value;

    const transaction = db.transaction([tableName], 'readwrite');
    const objectStore = transaction.objectStore(tableName);
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
    const tableName = document.getElementById('tableName').value;

    // Create a transaction
    const transaction = db.transaction(tableName, 'readonly');

    // Open the object store
    const objectStore = transaction.objectStore(tableName);

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
    const tableName = document.getElementById('tableName').value;
    const request = indexedDB.deleteDatabase(tableName);

    request.onsuccess = function (event) {
        console.log(`Table ${tableName} deleted successfully`);
    };

    request.onerror = function (event) {
        console.error('Error deleting table:', event.target.error);
    };
})