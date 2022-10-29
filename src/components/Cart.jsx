import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Cart.module.css'
import { useCartContext,useCounterContext } from '../context/Provider';
import Product from './Product'
import {useEffect} from 'react';




export const Cart = () => {

    const [cart,setCart] = useCartContext();
    const [counter, setCounter] =useCounterContext();
   let  cartPage=true;
   let total=0;



   

    let retrieveCart=JSON.parse(localStorage.getItem('cart'));
    // console.log({retrieveCart});
      let retrieveCounter= localStorage.getItem('counter');
      total = cart.reduce((acumulador, actual) => acumulador + actual.cost, 0)       
      console.log({total})  

    

    useEffect(() => {
        setCart(retrieveCart)
           console.log({cart});

          
           
           
        
           
          //  console.log({counter})
          
    }, [])
    
    useEffect(() => {

      
      localStorage.setItem('cart',JSON.stringify(cart))
      
      localStorage.setItem('counter',counter);

  }, [cart])


      const onClickRemove =(name,img,cost,id) => {
        console.log(img,name,cost,id)
        let cartFilter=cart.filter(product => product.id !== id);
        
        console.log({cartFilter});
        setCart(cartFilter);
        
        setCounter(counter => counter-1)
      

        
     }

  return (
      <>

                    <div className={styles.total}>
                      <h4>Total $ </h4>
                      


                           
                
                <p className={styles.cost}>{total}</p>

                      
                     
                    </div>
      <div className={styles.grid}>


              {

                cart ?
                cart.map((product ,index)=> (
                      <div key={index}>
                       <Product  name={product.name} img={product.img} cost={product.cost} onClickRemove={onClickRemove} id={product.id}/>
                      </div>

                   
                ))

                : 
                null
              }


      </div>
      
      
      
      </>
  )
}
