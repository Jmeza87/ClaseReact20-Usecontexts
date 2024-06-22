import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Filtroscategoria from './Filtroscategoria'
import logo from '../assets/img/logo.png'

// para el contexto
import { useContext } from "react";
import { carritoContext } from "../context/carritoContext";
import { CartFill } from 'react-bootstrap-icons';

const Header = () => {

  const { cart, vaciar, comprar } = useContext(carritoContext)
  const total = cart.reduce((acc, item) => acc + item.cantidad, 0);
    

  const totalCantidad = cart.reduce((total, item) => total + item.cantidad, 0);
  const totalPrecio = cart.reduce((total, item) => total + item.cantidad * item.price, 0);
  

  

  const [inputValue, setInputValue] = useState('');
    const manejoBuscar = (event) => {
      setInputValue(event.target.value);
      console.log(inputValue)
    };


    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/buscar', {
        state: inputValue,
      });	
      
    };



  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary fixed-top">
  <div className="container-fluid">
    <img src={logo} alt="" width={150} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/inicio" className="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>

        <li className="nav-item">
          <Link to="/tienda" className="nav-link active" aria-current="page" href="#">Tienda</Link>
        </li>

        <li className="nav-item">
          <Link to="/movil" className="nav-link active" aria-current="page" href="#">Movil</Link>
        </li>

        <li className="nav-item">
          <Link to="/laptop" className="nav-link active" aria-current="page" href="#">Laptop</Link>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
           <Filtroscategoria/>
          </ul>
        </li>

        <button className='btn btn-danger me-2'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">  <CartFill  size={25} /> <span className="bagbe">{cart.length} / {total} / {totalPrecio.toFixed(2)} $</span></button>

        <button className='btn btn-info me-2'  data-bs-toggle="modal" data-bs-target="#exampleModal"  >   <span className="bagbe">Ver detalles</span></button>

        
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input value={inputValue} onChange={manejoBuscar} className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Ok</button>
      </form>
    </div>
  </div>
</nav>


<div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Ver Carrito</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
              
                        {cart.map((item) => (
                            <div className="card mb-3" key={item.id}>
                                <div className="card-header p-0">
                                    <img src={item.thumbnail} alt={item.title}  className="img-fluid"  />
                                   
                                </div>
                                <div className="card-body text-center">
                                    <h5>{item.title}</h5>
                                    <p className="text-success">{item.brand}</p>
                                    <h5 className="text-danger">Precio: {item.price.toFixed(0).toLocaleString()}$</h5>
                                    <h5 className="text-danger">Cantidad: {item.cantidad}</h5>
                                    <h5 className="text-danger">Cantidad: {(item.cantidad*item.price).toFixed(0).toLocaleString()}$</h5>
                                </div>
                            </div>
                        ))}
                        {cart.length > 0 ? (
                            <>
                                <div className="card p-3">
                                <h5>Total Productos: {totalCantidad}</h5>
                                <h5>Total A Pagar: {totalPrecio.toFixed(2)}$</h5>
                                </div>
                                <div className="card p-3 my-3">
                                <button className="btn btn-danger btn-sm mx-1 mb-2" onClick={() => vaciar()}>
                                    Vaciar Carrito
                                </button>
                                <button className="btn btn-success btn-sm mx-1" onClick={() => comprar()}>
                                    Comprar
                                </button>
                                </div>
                            </>
                            ) : (
                            <div className="card p-3 my-3">
                                <h5>Carrito Vacío</h5>
                            </div>
                            )}
                        </div>
                    </div>


                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <table className='table table-bordered text-center'>
          <tbody><tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>

            {cart.map((item) => (
            <tr>
              <td><img src= {item.thumbnail} alt="Descripción de la imagen" width={50} /></td>
              <td>{item.title}</td>
              <td>{item.cantidad}</td>
              <td>{item.price}$</td>
              <td>{(item.cantidad*item.price).toFixed(0).toLocaleString()}$</td>
            </tr>
            ))}
          </tbody></table>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

          
    
    
    </>
  )
}

export default Header