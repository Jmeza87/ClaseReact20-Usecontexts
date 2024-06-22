import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cardpro from '../components/Cardpro'

const API = "https://dummyjson.com/products/category/"


const categorias = () => {

  const [datos, setDatos] = useState([])
  const params = useParams()
  let id=params.id;

  const getDatos = async () =>{
    const URI=API+id ;
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
  },[id]);

  const categoria = datos.length > 0 ? datos[0].category : '';

  return (
    <>
      <div className="container">
      <h1 className="text-center py-3">
         {categoria} ({datos.length})
      
      </h1>
      <div className="row">
        {datos && datos.map((item,index) => (
              
             
              
              <Cardpro key={index} item={item} />
            

          ))}
      </div>
    </div>
    
    </>
  )
}

export default categorias