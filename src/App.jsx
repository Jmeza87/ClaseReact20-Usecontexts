import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/inicio'
import Tienda from './pages/tienda'
import Laptop from './pages/laptop'
import Movil from './pages/movil'
import Buscar from './pages/buscar'
import Categorias from './pages/categorias'
import Contactos from './pages/contactos'
import Footer from './components/Footer'
import Carrito from './context/Carrito'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Carrito>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/tienda" element={<Tienda/>} />
            <Route path="/laptop" element={<Laptop/>} />
            <Route path="/movil" element={<Movil/>} />
            <Route path="/categorias/:id" element={<Categorias/>} />
            <Route path="/contactos" element={<Contactos/>} />
            <Route path="/buscar" element={<Buscar/>} />
            <Route path="*" element={<Inicio/>} />


            
          </Routes>
       <Footer/> 

      </BrowserRouter>
    </Carrito>
    
  )
}

export default App
