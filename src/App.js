import React, { useState, useEffect, createContext } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { auth } from './Firebase';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import PostProduct from "./Pages/Admin/PostProduct";
import PostRecipe from "./Pages/Admin/PostRecipe";
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import DriedBoba from './Pages/Products/DriedBoba';
import FreshBoba from './Pages/Products/FreshBoba';
import PowderSpices from './Pages/Products/PowderSpices';
import BeforeFooter from './Components/BeforeFooter/BeforeFooter';
import './App.css';
import Notice from './Pages/Notice/Notice';
import Event from './Pages/Event/Event';
import Product from './Pages/Product/Product';
import LandingPage from './Pages/LandingPage/LandingPage';
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "./Firebase";
import { getAdminRight } from "./Firebase";
import UserInfo from "./Pages/UserInfo/UserInfo";

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
        path: '/*',
        element: <LandingPage />,
      },
    ],
  },
]);

const adminRouter = createBrowserRouter([
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
        path: '/*',
        element: <LandingPage />,
      },
      {
        path: '/post-product',
        element: <PostProduct />,
      },
      {
        path: '/post-recipe',
        element: <PostRecipe />,
      },
      {
        path: '/user-info',
        element: <UserInfo />,
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
      const isItemInCart = prev.find((item) => item.productId === clickedItem.productId);

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

  const handleSetUserOnLogin = async (userId) => {
    const usersCollection = collection(db, "users");
    const userDoc = doc(usersCollection, userId);
    getDoc(userDoc)
      .then((doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          setUser(userData)
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      // const isAdmin = getAdminRight(user.uid)
      // setUser({
      //   ...user,
      //   name: user.displayName,
      //   email: user.email,
      //   isAdmin: isAdmin
      // })
      handleSetUserOnLogin(user.uid)
    })
  }, [])
  return <UserContext.Provider value={user}>
    <CartContext.Provider value={{ cartItems, handleAddToCart, handleRemoveFromCart, getTotalItems }}>
      <RouterProvider router={user ? adminRouter : router} />
    </CartContext.Provider>
  </UserContext.Provider>;
}

export default App;
