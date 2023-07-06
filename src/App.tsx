import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/organisms/Navbar/Navbar'
import { Routes } from 'react-router-dom'
import { Discover } from './pages/Discover/Discover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </>
  )
}

export default App
