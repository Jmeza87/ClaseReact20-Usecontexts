import React, { useEffect, useState } from 'react'
import Cardpro from '../components/Cardpro';

const API='https://dummyjson.com/products'

const tienda = () => {
  const [datos, setDatos] = useState([])

  const getDatos = async () =>{
    try {
        const response = await fetch(API);
        const data = await response.json();
        setDatos(data.products);
      } catch (error) {
        console.error(error)
      }
  };
  useEffect(()=>{
    getDatos();
  },[]);


  return (
    <>
      <div className='container'>

        <h1 className='text-center'> Todos los productos {datos.length}</h1>

      

      <div className='row'>
      {datos && datos.map((item,index) => (
                
                <Cardpro key={index} item={item}/>

            ))}


      </div>
         </div>
    
    </>
  )
}

export default tienda