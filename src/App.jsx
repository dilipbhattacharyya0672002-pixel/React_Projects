import Portfolio from './Project_Components/Portfolio/Portfolio.jsx'
import Header from './Project_Components/Portfolio/Header.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App
