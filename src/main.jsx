import React from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './components'
import { AppRoutes } from './routes/AppRoutes'
import './styles.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from './context/Provider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Provider >  
  <React.StrictMode>
 
 
   
    <AppRoutes />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>
)
