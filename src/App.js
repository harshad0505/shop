import react from "react";
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import About from "./pages/About";
import  Cart  from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route to="/" element={<Home />}></Route>
          <Route to="/About" element={<About />}></Route>
          <Route to="/Products" element={<Products />}></Route>
          <Route to="/Products/:_id" element={<SingleProduct/>}></Route>
          
         
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
