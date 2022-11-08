import { useContext,createContext,useState,useEffect } from "react";


const productContext =  createContext();
const cartContext =  createContext();
const dataContext = createContext();
const counterContext = createContext();


 
export function useProductContext(){
    return useContext(productContext)
 }


 export function useCartContext(){
    return useContext(cartContext)
 }
 export function useDataContext(){
    return useContext(dataContext)
 }

 export function useCounterContext(){
    return useContext(counterContext)
 }


export function Provider ({children}){


    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState(() =>{
        const dato = localStorage.getItem('cart');
       if(dato){
         return JSON.parse(dato);
         
       }else{
         return [];
       }


      
     });

    
     const [data, setData] = useState([])
     const [counter, setCounter] = useState(() =>{
        const dato = localStorage.getItem('counter');
       if(dato){
         return JSON.parse(dato);
         
       }else{
         return [];
       }


      
     });

    
    
    
    
    return(
        <productContext.Provider value={[product,setProduct]}>
                <cartContext.Provider value={[cart, setCart]}>

                    <dataContext.Provider value={[data,setData]}>
                    <counterContext.Provider value={[counter,setCounter]}>
                    {children}

                    </counterContext.Provider>
                    </dataContext.Provider>

             
                </cartContext.Provider>
        </productContext.Provider>

    );





}
