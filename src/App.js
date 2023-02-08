import React from 'react'
import Header from  './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Footer from './Components/Footer/Footer'
import Products from './Pages/Products/Products'
import NewProducts from './Pages/NewProducts/NewProducts'
import './App.css'


function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className='home' id='home'/>
      <Products id='products'/>
      <NewProducts/>
      <Footer />
    </div>
  );
}

export default App;