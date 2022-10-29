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
    const [cart, setCart] = useState([

    ]);


    
    const [data, setData] = useState([])
    const [counter, setCounter] = useState(0);
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
