import "../css/App.css";
import Home from "./components/pages/Home.jsx"
import Shop from "./components/pages/Shop.jsx"
import { Routes, Route} from 'react-router-dom'//Routes is a containter that holds all the page routes, and route defines which component to show when user visits a url


function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/shop" element={<Shop/>}/>
      </Routes>
    </main>
  )
  

}

export default App
