import React from 'react'
import { Route, Routes } from "react-router-dom"
import PageNotFound from './PageNotFound'
import Dashboard from './Dashboard'
import PrixM2 from './PrixM2'
import Map from './Map'


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


        <Route path="/" element={<Dashboard/>} />
        <Route path="/prix-m2" element={<PrixM2/>} />
        <Route path="/map" element={<Map/>} />

        
      </Routes>
    )
  }


export default AppRouter