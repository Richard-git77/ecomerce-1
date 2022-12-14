import  Header  from "./Header"
import Product from './Product'
import manzana from '/Manzanas1.png'
import sandia from '/sandia.jpg'
import { useDataContext,useCounterContext ,useCartContext} from '../context/Provider';
import mango from '/mango.jpg'
import styles from '../styles/App.module.css'
import {useState,useEffect,useRef} from 'react'


export const App = () => {



  const [counter,setCounter] = useCounterContext();
  
  let cartPageIf= true;


    const [cart, setCart] =  useCartContext();

    
    useEffect(() => {
     
     
      console.log({cart})

     
    

           
       localStorage.setItem('cart',JSON.stringify(cart));

      // console.log({cart} )

     

      // console.log(cart.length);

      localStorage.setItem('counter',counter);


    }, [cart])
    
      
       
    
    const onClick = (img,name,cost,id) =>{
      
      

    
      
        setCart( [...cart,{ name,img,cost,id}])

        setCounter(counter => counter+1);
      // console.log({counter})
       

    // localStorage.setItem('cart',JSON.stringify([...cart]));
     


    }

    
    
   
     
 
  
   


   
    
  
       
  
  
  
      //  useEffect(() => {
      //  console.log({cart})
     
      // }, [onClick])




  return (
    <>
    
    
    
    <Header />


        <div className={styles.grid}>
    <Product  name={'manzanita'} img={manzana} cost={17} id={crypto.randomUUID()} onClick={onClick} cartPage={cartPageIf}/>

    
    <Product img={mango} name={'manguito'} cost={22}id={crypto.randomUUID()}  onClick={onClick}cartPage={cartPageIf}/>
    
    <Product img={sandia} name={'sandiaaaa'} cost={14} id={crypto.randomUUID()} onClick={onClick}cartPage={cartPageIf}/>
    
    <Product img={manzana} name={'manzanita'} cost={17}id={crypto.randomUUID()}  onClick={onClick}cartPage={cartPageIf}/>
    
    <Product img={mango} name={'manguito'} cost={22}id={crypto.randomUUID()}  onClick={onClick}cartPage={cartPageIf}/>
    
    <Product img={sandia} name={'sandiaaaa'} cost={14} id={crypto.randomUUID()} onClick={onClick}cartPage={cartPageIf}/>
    
    <Product img={manzana} name={'manzanita'} cost={17}id={crypto.randomUUID()}  onClick={onClick}cartPage={cartPageIf}/>
    
    <Product img={mango} name={'manguito'} cost={22}id={crypto.randomUUID()}  onClick={onClick}cartPage={cartPageIf}/>
    
    <Product img={sandia} name={'sandiaaaa'} cost={14}id={crypto.randomUUID()}  onClick={onClick}cartPage={cartPageIf}/>
    
    <Product img={manzana} name={'manzanita'} cost={17}id={crypto.randomUUID()}  onClick={onClick}cartPage={cartPageIf}/>
    
    <Product img={mango} name={'manguito'} cost={22}id={crypto.randomUUID()}  onClick={onClick}cartPage={cartPageIf}/>

    <Product img={sandia} name={'sandiaaaa'} cost={14}id={crypto.randomUUID()}  onClick={onClick}cartPage={cartPageIf}/>


    </div>
   
    </>
  )
}
