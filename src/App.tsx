import './App.css'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/organisms/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Discover } from './pages/Discover/Discover'
import { Join } from './pages/Join/Join'
import { ThemeProvider } from '@emotion/react'
import { SoundWaveTheme } from './components/templates/SoundWaveTheme'

function App() {
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
