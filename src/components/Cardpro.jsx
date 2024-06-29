import React, { useState } from 'react'
import Detalles from './Detalles'

{/* se realiza importacion del contexts para usarlo */}
import { useContext } from "react";
import { carritoContext } from "../context/carritoContext";

const Cardpro = ({item}) => {


  const { cart, agregar, vaciar, eliminar, comprar } = useContext(carritoContext)


  const getCantidad=(item)=>{
    return cart.find((producto)=> producto.id === item.id)?.cantidad || 0
}

const totalProd=getCantidad(item)


const [cant, setCant] = useState(1);
    const handleChange = (event) => {
      setCant(event.target.value);
    };

  return (
    <>
   
         <div className="col-sm-6 col-md-4 col-lg-3 mb-4 text-black">
        <div className="card h-100">
          <div className="card-header">

          {
                        totalProd > 0 && (
                          <span
                          className="badge rounded-pill text-bg-warning fs-3 m-1"  style={{ position: 'absolute', top: '0', right: '0', zIndex: '1' }}>
                            {totalProd}
                        </span>  
                        )
                    }

            <img src={item.thumbnail} alt="" className="img-fluid" />
          </div>

          <div className="card-body text-center">
            <p>{item.title}</p>

            <p className="text-danger">Cantidad:  {item.stock}</p>
            <p className="text-danger">{item.price}$</p>
          </div>

          <div className="card-footer text-center">
            <a href="#" className="btn btn-info" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>
              Ver detalles
            </a>
            <hr />
            <div className="d-flex justify-content-center"> 


           {/* <button className="btn btn-success btn-sm mx-1" onClick={()=>agregar(item,cant)}>Agregar</button> */}

           <button className={`btn btn-outline-${totalProd === 0 ? 'success' : 'warning'} btn-sm mx-1`} onClick={() => agregar(item, cant)}>
            {totalProd === 0 ? 'Agregar' : 'Actualizar'}
            </button>


            <select
                value={cant}
                onChange={handleChange}
                className="form-control bg-dark text-white-50"
                style={{ width: 80 }}
                
                >
                {Array.from({ length: item.stock },  (_, i) => i + 1).map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
                </select>


           {/*<input 
            type="number" 
            value={cant} 
            onChange={handleChange}
            className="form-control bg-dark text-white"  
            style={{width:80}} 
            onFocus={(e) => e.target.select()}
            min={1}
            />*/} 

            {/*
                        totalProd > 0 && (
                            <button className="btn btn-danger btn-sm mx-1" onClick={()=>eliminar(item)}>- Restar</button>
                        )

                    */}
                    </div>
            

          </div>
        </div>
      </div>
      <Detalles key={item.id} item={item}/>
    
    </>
  )
}

export default Cardpro