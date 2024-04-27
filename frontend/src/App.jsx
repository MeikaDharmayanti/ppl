import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ipk from './ipk'; // Impor komponen Ipk
import TambahMahasiswa from './tambahmahasiswa'; // Impor komponen TambahMahasiswa
import TambahKRS from './tambahkrs'; // Impor komponen TambahMahasiswa
import './index.css';


function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div className='sidebar'>
          <h2> Menu SIMAK</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/ipk">IPK</Link></li>
            <li><Link to="/tambah-mahasiswa">Tambah Mahasiswa</Link></li>
            <li><Link to="/tambah-krs">Tambah KRS</Link></li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <Routes>
            <Route path="/" element={<Ipk />} />
            <Route path="/ipk" element={<Ipk />} />
            <Route path="/tambah-mahasiswa" element={<TambahMahasiswa />} />
            <Route path="/tambah-krs" element={<TambahKRS />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
