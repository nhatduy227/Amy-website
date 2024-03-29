import React, { useState, useEffect, createContext } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { auth } from './Firebase';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import PostProduct from "./Pages/Admin/PostProduct";
import ManageProduct from "./Pages/Admin/ManageProduct";
import PostRecipe from "./Pages/Admin/PostRecipe";
import ManageOrder from "./Pages/Admin/ManageOrder";
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import DriedBoba from './Pages/Products/DriedBoba';
import FreshBoba from './Pages/Products/FreshBoba';
import PowderSpices from './Pages/Products/PowderSpices';
import BeforeFooter from './Components/BeforeFooter/BeforeFooter';
import AdminLogin from "./Pages/Admin/AdminLogin";
import Notice from './Pages/Notice/Notice';
import Contact from './Pages/Contact/Contact'
import Event from './Pages/Event/Event';
import Product from './Pages/Product/Product';
import CheckoutCart from './Pages/CheckoutCart/CheckoutCart';
import NotFound from "./Pages/NotFound/NotFound";
import './App.css';

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
    path: '/admin',
    element: <AdminLogin />
  },

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
        path: '/dried-boba',
        element: <DriedBoba />,
      },
      {
        path: '/fresh-boba',
        element: <FreshBoba />,
      },
      {
        path: '/powder-spices',
        element: <PowderSpices />,
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
        element: <FreshBoba />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/*',
        element: <NotFound />,
      },
      {
        path: '/post-product',
        element: <PostProduct />,
      },
      {
        path: '/manage-product',
        element: <ManageProduct />,
      },
      {
        path: '/post-recipe',
        element: <PostRecipe />,
      },
      {
        path: '/manage-order',
        element: <ManageOrder />,
      },
      {
        path: '/cart',
        element: <CheckoutCart />,
      },
    ],
  },
]);

export const UserContext = createContext({ user: null })
export const CartContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.productName === clickedItem.productName);
      if (isItemInCart) {
        return prev.map((item) =>
          item.productId === clickedItem.productId
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => {
      return prev.reduce((acc, item) => {
        if (item.productId === productId) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, []);
    });
  };

  const getTotalItems = (items) => items.reduce((acc, item) => acc + item.amount, 0);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const idTokenResult = await user.getIdTokenResult();
          setUser({ ...user, role: idTokenResult.claims.role });
        } catch (e) {
          console.log("error")
        }
      } else {
        setUser(undefined);
      }
    });
  }, [])

  return (
    <UserContext.Provider value={user}>
      <CartContext.Provider value={{ cartItems, setCartItems, handleAddToCart, handleRemoveFromCart, getTotalItems }}>
        <RouterProvider router={router} />
      </CartContext.Provider>
    </UserContext.Provider>
  )
    ;
}

export default App;
