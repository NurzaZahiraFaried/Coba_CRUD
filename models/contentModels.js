module.exports = {
    fetchData:(db, callback) => {
        db.query("SELECT * FROM content", callback);
    },
    getById: (db, id, callback) => {
        db.query("SELECT * FROM content WHERE id = " + id, callback);
    },
    insertData: (db, data, callback) => {
        db.query("INSERT INTO content SET ?", data, callback);
    },
    updateData: (db, id, data, callback) => {
        db.query("UPDATE content SET ? WHERE id=" + id, data, callback);
    },
    deleteData: (db, id, callback) => {
        db.query("DELETE FROM content WHERE id=" + id, callback);
    }
}