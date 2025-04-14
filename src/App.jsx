import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Books from './Pages/Books'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import Home from './Pages/Home'
import ProductPage from './Pages/ProductPage'
import Shop from './Pages/Shop'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/blog" element = {<Blog/>}/>
          <Route path = "/books" element = {<Books/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = "/faq" element = {<Faq/>}/>
          <Route path = "/productpage/:id" element = {<ProductPage/>}/>
          <Route path = "/shop" element = {<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
