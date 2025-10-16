import "./css/App.css";
import Home from "./components/pages/Home.jsx"
import Shop from "./components/pages/Shop.jsx"
import { Routes, Route} from 'react-router-dom'//Routes is a containter that holds all the page routes, and route defines which component to show when user visits a url
import NavBar from "./components/Navbar";
import Product from "./components/pages/Product.jsx"
import Cart from "./components/pages/Cart.jsx"


function App() {

  return (
    <div>
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/shop" element={<Shop/>}/>
        <Route path = "/product/:id" element={<Product/>}/>
        <Route path = "/cart" element={<Cart/>}/>

      </Routes>
    </main>
    </div>
  )
  

}

export default App
