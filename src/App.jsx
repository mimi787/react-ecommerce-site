import "./css/App.css";
import Cart from "./components/pages/Cart.jsx"
import Home from "./components/pages/Home.jsx"
import Shop from "./components/pages/Shop.jsx"
import Product from "./components/pages/Product.jsx"
import { CartProvider } from "./contexts/CartContext"
import { Routes, Route} from 'react-router-dom'//Routes is a containter that holds all the page routes, and route defines which component to show when user visits a url
import NavBar from "./components/Navbar";

//cartprovider is globally accessed, so wrap around the entire app
//navbar should be available throughout all pages



function App() {

  return (
    <div>
      <CartProvider>
      <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/shop" element={<Shop/>}/>
            <Route path = "/product/:id" element={<Product/>}/>
            <Route path = "/cart" element={<Cart/>}/>
          </Routes>
        </main>
      </CartProvider>
    </div>
  );
  

}

export default App
