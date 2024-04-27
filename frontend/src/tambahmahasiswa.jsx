// import React, { useState } from 'react';
// import './index.css';

// function AddMahasiswa({ onAddMahasiswa }) {
//   const [nim, setNim] = useState('');
//   const [nama, setNama] = useState('');
//   const [jurusan, setJurusan] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Memastikan data yang diisi tidak kosong
//     if (!nim || !nama || !jurusan) {
//       alert('Silakan lengkapi semua kolom');
//       return;
//     }

//     // Mengirim data ke parent component
//     onAddMahasiswa({ nim, nama, jurusan });

//     // Mengosongkan kolom input setelah data ditambahkan
//     setNim('');
//     setNama('');
//     setJurusan('');
//   };

//   return (
//     <div className='form-container'>
//       <h2>Tambah Mahasiswa</h2>
//       <form onSubmit={handleSubmit}>
//         <div className='form-group'>
//         <label>NIM:</label>
//         <input
//           type="text"
//           value={nim}
//           onChange={(e) => setNim(e.target.value)}
//         />
//         </div>
//       <div className='form-group'>
//         <label>Nama:</label>
//         <input
//           type="text"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Jurusan:</label>
//         {/* <input
//           type="text"
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//         /> */}
//         <select value={jurusan} onChange={(e) => setJurusan(e.target.value)}>
//             <option value="">Pilih Jurusan</option>
//             <option value="Teknologi Informasi">Teknologi Informasi</option>
//             <option value="Sistem Informasi">Sistem Informasi</option>
//             <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
//             <option value="Manajemen Bisnis">Manajemen Bisnis</option>
//           </select>
//       </div>
//         <button type="submit">Tambah</button>
//       </form>
//     </div>
//   );
// }

// export default AddMahasiswa;

import React, { useState } from 'react';
import axios from 'axios';

function AddMahasiswa({ onAddMahasiswa }) {
  const [nim, setNim] = useState('');
  const [nama, setNama] = useState('');
  const [jurusan, setJurusan] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Memastikan data yang diisi tidak kosong
    if (!nim || !nama || !jurusan) {
      alert('Silakan lengkapi semua kolom');
      return;
    }

    try {
      // Mengirim data ke backend
      const response = await axios.post('http://localhost:8801/tambah-mahasiswa-tambah', {
        nim,
        nama,
        jurusan,
      });

      // Memanggil fungsi onAddMahasiswa yang diterima dari prop untuk mengupdate data di komponen induk
      onAddMahasiswa({ nim, nama, jurusan });

      // Mengosongkan kolom input setelah data ditambahkan
      setNim('');
      setNama('');
      setJurusan('');

      alert('Data mahasiswa berhasil ditambahkan');
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat menambahkan data mahasiswa');
    }
  };

  return (
    <div className='form-container'>
      <h2>Tambah Mahasiswa</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>NIM:</label>
          <input
            type="text"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Nama:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Jurusan:</label>
          <select value={jurusan} onChange={(e) => setJurusan(e.target.value)}>
            <option value="">Pilih Jurusan</option>
            <option value="Teknologi Informasi">Teknologi Informasi</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
            <option value="Manajemen Bisnis">Manajemen Bisnis</option>
          </select>
        </div>
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default AddMahasiswa;

