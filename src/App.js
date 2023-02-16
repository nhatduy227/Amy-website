import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Product from './Pages/Product/Product';
import BeforeFooter from './Components/BeforeFooter/BeforeFooter';

function Layout() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
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
        path: '/product',
        element: <Product />,
      },
      {
        path: '/event',
        element: <Product />,
      },
      {
        path: '/notice',
        element: <Product />,
      },
      {
        path: '/where-to-buy',
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
