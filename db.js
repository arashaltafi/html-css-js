var db = new Dexie("FriendDatabase");
const dbVersion = 1;

db.version(dbVersion).stores({
    users: 'id',
});