let db;

function createDatabase() {
    const dbName = document.getElementById('dbName').value;
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = function (event) {
        db = event.target.result;
        console.log(`Database ${dbName} created`);

        const tableName = document.getElementById('tableName').value;
        const objectStore = db.createObjectStore(tableName, { keyPath: 'key', autoIncrement: true });
        console.log(`Table ${tableName} created`);

        // You can create indexes here if needed
        // const index = objectStore.createIndex('indexName', 'property');
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        console.log(`Connected to ${dbName}`);
    };

    request.onerror = function (event) {
        console.error('Error creating database:', event.target.error);
    };
}

function createTable() {
    // This is handled in the onupgradeneeded event when creating the database
    console.log('Table creation is handled during database creation');
}

function addRecord() {
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
}

function readRecord() {
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
}

function updateRecord() {
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
}

function deleteRecord() {
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
}

function deleteTable() {
    const tableName = document.getElementById('tableName').value;
    const request = indexedDB.deleteDatabase(tableName);

    request.onsuccess = function (event) {
        console.log(`Table ${tableName} deleted successfully`);
    };

    request.onerror = function (event) {
        console.error('Error deleting table:', event.target.error);
    };
}

function deleteDatabase() {
    const dbName = document.getElementById('dbName').value;
    const request = indexedDB.deleteDatabase(dbName);

    request.onsuccess = function (event) {
        console.log(`Database ${dbName} deleted successfully`);
    };

    request.onerror = function (event) {
        console.error('Error deleting database:', event.target.error);
    };
}