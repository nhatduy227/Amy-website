import React, { useState, useEffect, createContext } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { auth } from './Firebase';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Admin from "./Pages/Admin/Admin";
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Product from './Pages/Product/Product';
import BeforeFooter from './Components/BeforeFooter/BeforeFooter';
import './App.css';

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
      {
        path: '/admin',
        element: <Admin />,
      },
    ],
  },
]);

export const UserContext = createContext({ user: null })

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const { displayName, email } = user;
      setUser({
        displayName,
        email
      })
    })
  }, [])

  return <UserContext.Provider value={user}>
    <RouterProvider router={router} />
  </UserContext.Provider>;
}

export default App;
