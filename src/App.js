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
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase";
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
  const dummyData = [{
    amount
      :
      1,
    productFile
      :
      "https://firebasestorage.googleapis.com/v0/b/amy-website-eeebe.appspot.com/o/images%2F1680119614512_phomai.png?alt=media&token=30c69fa3-bf6a-4e68-b1be-e87dc4602015",
    productId
      :
      "71fd3628-c4ec-4e16-930b-2029182d06d2",
    productName
      :
      "Trân châu phô mai 350 gr",
    productPrice
      :
      "20000",
    productType
      :
      "freshBoba"
  },
  ]
  const [user, setUser] = useState(null)
  const [cartItems, setCartItems] = useState(dummyData);

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

  const getAdminRight = async (userId) => {
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
      getAdminRight(user.uid)
    })
  }, [])
  return <UserContext.Provider value={user}>
    <CartContext.Provider value={{ cartItems, handleAddToCart, handleRemoveFromCart, getTotalItems }}>
      <RouterProvider router={user ? adminRouter : router} />
    </CartContext.Provider>
  </UserContext.Provider>;
}

export default App;
