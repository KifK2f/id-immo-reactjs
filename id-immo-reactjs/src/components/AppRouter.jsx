import React from 'react'
import { Route, Routes } from "react-router-dom"
import PageNotFound from './PageNotFound'
// import Home from './Home'



// Composant générique pour les pages
const Page = ({ title, children }) => (
  <div className="container py-5">
    <h1>{title}</h1>
    {children}
  </div>
)

const AppRouter = () => {


    return (
      <Routes>
        {/* Pour les url erroné on affichera une page */}
        <Route path="*" element={<PageNotFound/>} />


        {/* Page d'accueil */}
        {/* <Route path="/" element={<Home/>} /> */}

        
      </Routes>
    )
  }


export default AppRouter