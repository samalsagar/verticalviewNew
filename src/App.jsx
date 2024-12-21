import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <HeroSection />
      </div>
  )
}

export default App
