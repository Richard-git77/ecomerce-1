import {Routes,Route, Navigate} from 'react-router-dom'
import {Navbar,App,Cart,ProductId} from '../components'



import React from 'react'

export const AppRoutes = () => {
  return (
    
    <>



        <Navbar />


        <Routes>


        <Route path='app' element={<App /> }/>
        <Route path='cart' element={<Cart /> }/>
        <Route path='product/:name' element={<ProductId /> }/>
        
        
        <Route path="/" element={<Navigate to='/app' /> }/>

        </Routes>
        




    </>
  )
}
