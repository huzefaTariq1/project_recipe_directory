import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
  import Home from '../pages/Home'
  import Create from '../pages/Create'
  import Search from '../pages/Search'
import Recipes from '../pages/Recipes';
  

const MyRoutes = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/search' element={<Search/>}></Route>  
          <Route path='/recipes/:id' element={<Recipes/>}></Route>  
          <Route path='*' element={<div>404 Not Found</div>}></Route>  
        </Routes>
        </>
  )
}

export default MyRoutes