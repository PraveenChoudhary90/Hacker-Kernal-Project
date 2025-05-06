
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import AddProduct from './Pages/AddProduct'
import Display from './Pages/Display'
import Search from './Pages/Search'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Login/>}/>
      <Route path='login' element={<Login/>}/>
      </Route>
     </Routes>
     <Routes>
      <Route path='home' element={<Home/>}>
       <Route path='add' element={<AddProduct/>}/>
       <Route path='display' element={<Display/>}/>
       <Route path='search' element={<Search/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
