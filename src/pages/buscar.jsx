import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Cardpro from '../components/Cardpro';

const API  ="https://dummyjson.com/products/search?q=";

const buscar = () => {

    const [datos, setDatos] = useState([])
    const location = useLocation();
    const valueSearch = location.state; 

    const getDatos = async () =>{
        const URI=API+valueSearch ;
        try {
          const response = await fetch(URI);
          const data = await response.json();
          console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
      };

      useEffect(()=>{
        getDatos();
      },[valueSearch]);


  return (
    <>
        <div className="container">
      <h1 className="text-center py-3">
        Todos los Productos {valueSearch} ({datos.length})
      </h1>
      <div className="row">
        {datos && datos.map((item,index) => (
              
              <Cardpro key={index} item={item}/>
            

          ))}
      </div>
    </div>
    
    </>
  )
}

export default buscar