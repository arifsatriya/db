const db = require("./db_config"); 
const sql = "SELECT * FROM tbmahasiswa";// digunakan untuk menuliskan nama tabel milik masing-masing

db.query(sql, function (err, result) {
    if (err) throw err;
    
    // gunakan perulangan untuk menampilkan data
    console.log(`ID \t NAMA \t\t\t ALAMAT`);
    console.log(`----------------------------------------------------------`);
    result.forEach((pelanggan) => {
        console.log(`${pelanggan.No} \t ${pelanggan.Nama_Mhs} \t\t\t ${pelanggan.Asal_Daerah}`);
    });
});
