import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  // const [searchResults, setSearchResults] = useState([])

  // useEffect(()=> {
  //   fetch('http://localhost:8801/tb_mahasiswa')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  //   .catch(err=> console.log(err));
  // }, [])

  useEffect(()=> {
    fetchData();
  }, [])

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:8801/tb_mahasiswa')
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  function handleSearchSubmit(event) {
    event.preventDefault()
    // Lakukan pencarian di sini
    const filteredData = data.filter(item => 
      item.Nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Nim.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
    setData(filteredData)
  }

  function handleResetSearch() {
    setSearchTerm('')
    fetchData()
  }

  return (
    <div className="container">
      <h1>Data IPK Mahasiswa</h1>
        <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search by name or NIM"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleResetSearch}>Reset</button>
        </form>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nim</th>
            <th>Nama</th>
            <th>Jurusan</th>
            <th>IPK</th>
          </tr>
        </thead>
        <tbody>
        {data.map(item => (
            <tr key={item.No}>
              <td>{item.No}</td>
              <td>{item.Nim}</td>
              <td>{item.Nama}</td>
              <td>{item.Jurusan}</td>
              <td>{item.IPK}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
