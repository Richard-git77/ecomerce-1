import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Product.module.css'



function Product({name,img,cost,id,onClick,cartPage,onClickRemove}) {

let cartPageIf= '';
  

  const onClickRemoveProduct = () => {
    onClickRemove(img,name,cost,id);
  }
    
   const onClickProduct = () => {
       onClick(img,name,cost,id);
   }
    





  return (







    
    <Card  className={styles.card} border='dark' style={{ width: '18rem' }} >

      <Link to={`/product/${name}`}>
      <Card.Img variant="top" className={styles.img}src={img}  />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
     
        <Card.Text >
              
          
          Cost $: {cost}
        </Card.Text>
        
        {(cartPage === true) ? 
        <Button variant="primary" onClick={onClickProduct}>Add to cart</Button>

            :
        <Button variant="primary" onClick={onClickRemoveProduct}>Remove Item</Button>


      }
      </Card.Body>
    </Card>
  );
}

export default Product;