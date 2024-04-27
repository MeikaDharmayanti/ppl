import React, { useState } from 'react';
import './index.css';

function AddMahasiswa({ onAddMahasiswa }) {
  const [nim, setNim] = useState('');
  const [nama, setNama] = useState('');
  const [jurusan, setJurusan] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Memastikan data yang diisi tidak kosong
    if (!nim || !nama || !jurusan) {
      alert('Silakan lengkapi semua kolom');
      return;
    }

    // Mengirim data ke parent component
    onAddMahasiswa({ nim, nama, jurusan });

    // Mengosongkan kolom input setelah data ditambahkan
    setNim('');
    setNama('');
    setJurusan('');
  };

  return (
    <div className='form-container'>
      <h2>Tambah KRS</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <label>Kode MK:</label>
        <input
          type="text"
          value={nim}
          onChange={(e) => setNim(e.target.value)}
        />
        </div>
      <div className='form-group'>
        <label>Nim:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>SKS:</label>
        <input
          type="text"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
        />
        {/* <select value={jurusan} onChange={(e) => setJurusan(e.target.value)}>
            <option value="">Pilih Jurusan</option>
            <option value="Teknologi Informasi">Teknologi Informasi</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
            <option value="Manajemen Bisnis">Manajemen Bisnis</option>
          </select> */}
      </div>
      <div className='form-group'>
        <label>Semester KRS:</label>
        <input
          type="text"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
        /> </div> 
         <div className='form-group'>
        <label>Nilai:</label>
        <input
          type="text"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
        /> </div>
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default AddMahasiswa;
