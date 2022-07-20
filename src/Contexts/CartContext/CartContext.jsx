import React from 'react'
import { useState, useEffect } from 'react';
import { createContext } from 'react'
import Toastify from 'toastify-js';

export const myCartContext = createContext();

export default function CartProvider({ children }) {

    const [cantidad, setCantidad] = useState(0)

    const [cart, setCart] = useState(() => {

        const instrumentosStorage = localStorage.getItem("cart")

        try{
            return instrumentosStorage ? JSON.parse(instrumentosStorage) : []
        } catch(error){
            console.log("error", error)
        }
    })
    

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    
    
function addItem(item, cantidadItems){

    if(isInCart(item.id)){
        let nuevoCart = cart; 
        let indexProducto = nuevoCart.findIndex(instrumento=> instrumento.id === item.id); 
        nuevoCart[indexProducto].cantidad = Number(nuevoCart[indexProducto].cantidad) + Number(cantidadItems);
        setCart([...nuevoCart]); 
    }else{
        setCart([...cart, {...item, cantidad:cantidadItems }],)
    }
    setCantidad(cantidad + cantidadItems)
}

function removeItem(itemID){
    const removedItem = cart.find((instrumento) => instrumento.id === itemID)
    setCart(cart.filter((instrumento) => instrumento.id !== itemID),)
    setCantidad(cantidad - removedItem.cantidad)
    Toastify({
        text: "Se elimino " + removedItem.title + " del carrito de compras!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        style: {
          background: "red",
        },
        onClick: function(){} 
      }).showToast();
}

function clear(){
    setCart([],)
    setCantidad(0)
    Toastify({
        text: "Usted ha vaciado su carrito de compras!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        style: {
          background: "red",
        },
        onClick: function(){} 
      }).showToast();
}

function isInCart(id) {
    return cart.find( item => item.id === id)
}


    return (
        <>
            <myCartContext.Provider value={{cart, addItem, removeItem, clear, cantidad}}>
                {children}
            </myCartContext.Provider>
        </>
    )
}
