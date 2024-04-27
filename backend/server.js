const express = require ('express');
const mysql = require ('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_mahasiswa"
})

app.get('/', (re, res)=> {
    return res.json( "From Backend Side" );
})

app.get('/tb_mahasiswa', (req, res)=> {
    const sql = "SELECT * FROM tb_mahasiswa";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8801, ()=> {
    console.log("listening");
})
// tambah mahasiswa 
// Middleware untuk mengizinkan aplikasi Express membaca body dari request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Endpoint untuk menambahkan data mahasiswa
app.post('/tambah-mahasiswa-tambah', (req, res) => {
    const { nama, nim, jurusan } = req.body;
  
    // Validasi data
    if (!nama || !nim || !jurusan) {
      return res.status(400).json({ message: 'Nama, NIM, dan Jurusan harus diisi' });
    }
  
    // Query SQL untuk menyimpan data ke database
    const sql = 'INSERT INTO tb_tambah_mahasiswa (Nama, Nim, Jurusan) VALUES (?, ?, ?)';
    db.query(sql, [nama, nim, jurusan], (err, result) => {
      if (err) {
        throw err;
      }
      res.status(201).json({ message: 'Data mahasiswa berhasil ditambahkan' });
    });
  });
  