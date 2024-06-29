import { useEffect, useState } from "react";
import { carritoContext } from "./carritoContext"
import Swal from "sweetalert2";

const Carrito = ({children}) => {

    //const [cart, setCart] = useState([]);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
      // Guardar el estado cart en el localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    


    const agregar = (producto, cant) =>{
    cant=parseInt(cant);
      if(producto.stock >= cant){
        setCart((currItems)=>{
            const isItemInCart = currItems.find((item)=> item.id === producto.id)
            if(isItemInCart){
                return currItems.map((item)=>{
                  if(item.id === producto.id){
                    
                    return {...item, cantidad: item.cantidad = cant};

                  }else{
                    return item;
                  }  
                })
        }else{
            return [...currItems, {...producto, cantidad: cant}];
        }
        })
      }else{
        alert("La cantidad no puede ser mayor al STOCK!!!!")
      }
        //setCart([...cart, producto])
       //console.log("agregado")
       //console.log(cart)
    }
    const vaciar = () =>{
        setCart([])
        alert("Carrito vaciado")
       
    }
    const eliminar = (producto) =>{
        setCart((currItems)=>{
            if(currItems.find((item)=> item.id === producto.id)?.cantidad === 1){
                return currItems.filter((item)=> item.id !== producto.id);
            }else{
                return currItems.map((item)=>{
                    if(item.id === producto.id){
                        return {...item, cantidad: item.cantidad - 1};
                    }else{
                        return item;
                    }
                })
            }    
        })
        
        
        /*
        para eliminar todos los item
        setCart((currItems)=>{
            return currItems.filter((item)=> item.id !== producto.id);
        })
        */
        console.log(cart)
    }

    const comprar = () => {
        fetch('https://dummyjson.com/carts/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: 1,
            products: cart.map((item) => ({
              id: item.id,
              quantity: item.cantidad
            }))
          })
        })
          .then((res) => res.json())
          .then(console.log);
          alert("Gracias por su compra")
          setCart([])
      };

  return (
    <carritoContext.Provider 
        value={{cart, agregar, vaciar, eliminar, comprar}}>
        {children}
    </carritoContext.Provider>
  )
}

export default Carrito