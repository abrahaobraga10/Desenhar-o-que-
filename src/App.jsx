import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import InitialPage from './pages/home/InitialPage'
import MainPage from './pages/app/MainPage'

function App() {
  return (
    <BrowserRouter basename="/Desenhar-o-que-/">
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App