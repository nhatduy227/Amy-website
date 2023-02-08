import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Footer from '../../Components/Footer/Footer'
import Products from '../Products/Products'
import NewProducts from '../NewProducts/NewProducts'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className='landing'/>
      <Products/>
      <NewProducts/>
      <Footer />
    </div>
  )
}