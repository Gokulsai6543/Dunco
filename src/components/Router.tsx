import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
const Router:React.FC<{}> = () => {
  return (
    <div>
      <Routes>
        <Route  path="/" Component={Header} />
    </Routes>    
    </div>
  )
}

export default Router
