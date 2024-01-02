import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/products.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Navs from "./components/Navs";



import { faX } from "@fortawesome/free-solid-svg-icons";

import "./css/cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import { ContextProvider, ShoppingContext } from "./components/ShoppingContext";
import Cart from "./components/Cart";
function App() {
  const{ products=[] }=useContext(ShoppingContext)||{};
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUsername, setLoggedInUsername] = useState(null);

  useEffect(() => {
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      const { email, username } = JSON.parse(loggedInUserData);
      setLoggedInUser(email);
      setLoggedInUsername(username);
    }
  }, []);

  const handleLogin = (userEmail, userUsername) => {
    setLoggedInUser(userEmail);
    setLoggedInUsername(userUsername);
    localStorage.setItem("loggedInUser", JSON.stringify({ email: userEmail, username: userUsername }));
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setLoggedInUsername(null);
    localStorage.removeItem("loggedInUser");
  };
 



  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const openAside = () => {
    const aside = document.getElementById("aside");
    aside.classList.add("open");
  };
  const disAside = () => {
    const aside = document.getElementById("aside");

    aside.classList.remove("open");
  };




  return (

       <ContextProvider >  
       <div>
      {loading ? (
        <div>
          <p className="text-center d-flex justify-content-center align-items-center mt-5 pt-5">
            WELCOME TO OUR ONLINE-STORE
          </p>
          <h1 className="text-center text-white bg-dark   d-flex justify-content-center align-items-center mt-3 p-5">
            BY / AMR KHALED MAREY
            <Spinner
              animation="border"
              role="status"
              className="text-center d-flex justify-content-center align-items-center"
            >
              <span className="sr-only visibility-hidden">...loading</span>
            </Spinner>
          </h1>
        </div>
      ) : (
       
        <BrowserRouter>
    
          <Navs openAside={openAside}  loggedInUser={loggedInUser} handleLogout={handleLogout}/>
          <aside id="aside">
            <div className="icon">
              <FontAwesomeIcon icon={faX} onClick={disAside} />
            </div>
          <Cart />
         
          </aside>

          <Routes>
            <Route
              path="/"
              element={
                <Home
                
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/product"
              element={<Products  />}
            />

            <Route
              path="/product/:productId"
              element={
                <ProductDetails
                 
                  imgs={products.imgs}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NoPage />} />
            <Route path="/register" element={ <Register />}/>
        <Route path="/login" element={ <Login onLogin={handleLogin} />}/>
     
        <Route path="/profile" element={  <UserProfile email={loggedInUser}    username={loggedInUsername} />}/>

          </Routes>

          <Footer />
       
        </BrowserRouter>
         
      )}
    </div> 
  
    </ContextProvider>
  );
}

export default App;
