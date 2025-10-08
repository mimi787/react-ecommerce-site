import { Routes, Route} from 'react-router-dom'//Routes is a containter that holds all the page routes, and route defines which component to show when user visits a url
import Home from './components/pages/Home'//page imports
import Shop from './components/pages/Shop'
import ProductPage from './components/pages/ProductPage'
import Checkout from './components/pages/Checkout'
import Navbar from './components/Navbar'//will always be visible between pages

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />//defines the path to specific react component
      <Route path="/shop" element={<Shop/>} />
      <Route path="/product/:id" element={<ProductPage/>} />//dynamic page routing
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
    </>
  )
}

export default App
