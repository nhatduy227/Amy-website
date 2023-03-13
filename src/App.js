import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import BeforeFooter from './Components/BeforeFooter/BeforeFooter';
import Notice from './Pages/Notice/Notice';
import Event from './Pages/Event/Event';
import Product from './Pages/Product/Product';
import LandingPage from './Pages/LandingPage/LandingPage';

function Layout() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="container">
          <Navbar />
          <Outlet />
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/event',
        element: <Event />,
      },
      {
        path: '/notice',
        element: <Notice />,
      },
      {
        path: '/where-to-buy',
        element: <Products />,
      },
      {
        path: '/*',
        element: <LandingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
