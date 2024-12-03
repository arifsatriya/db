const db = require("./db_datasiswa"); // digunakan untuk menuliskan nama database milik masing-masing
const sql = "SELECT * FROM tbmahasiswa";// digunakan untuk menuliskan nama tabel milik masing-masing

db.query(sql, function (err, result) {
    if (err) throw err;
    
    // gunakan perulangan untuk menampilkan data
    console.log(`ID \t NAMA \t\t\t ALAMAT`);
    console.log(`----------------------------------------------------------`);
    result.forEach((pelanggan) => {
        console.log(`${pelanggan.id} \t ${pelanggan.nama} \t\t\t ${pelanggan.alamat}`);
    });
});
