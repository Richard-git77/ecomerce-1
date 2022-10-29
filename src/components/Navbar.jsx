import {NavLink} from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

import logo from '../../public/free-logo-2v9y0ak7rs-ivktkenmlw.jpg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import {useCounterContext} from '../context/Provider'

export const Navbar = () => {
//   const counter=7;

  const [counter,setCounter] = useCounterContext();
  
  return (
<>


                <div className={styles.navbar}>
                    <li>
            <NavLink to='app'>
                <div className={styles.logo}>
                <img className={styles.imglogo} src={logo} />
                </div>
                </NavLink>
                </li>


<li>
                <div className={styles.input}>
                    <div className={styles.search}>
                        <SearchIcon  color="gray" style={{ fontSize: 50 , color :'white'}}/>
                    </div>
                <input className={styles.box} type="text"
                placeholder='What are you looking for?' />
                </div>
                </li>


                <li>
                    <div className={styles.boxc}>
                <div className={styles.cart}>
                <NavLink to='cart'>
                    <ShoppingCartCheckoutRoundedIcon style={{color: 'white', fontSize: 50}}/>
                <div className={styles.circle}>{counter}</div>
                </NavLink>
                

                </div>
                </div>
                </li>
            
            </div>



</> 

)
}
