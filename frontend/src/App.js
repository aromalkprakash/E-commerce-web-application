
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup'; 
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/> 
        <Route path='/mens' element={<ShopCategory category="men"/>}/> 
        <Route path='/womens' element={<ShopCategory category="women"/>}/> 
        <Route path='/kids' element={<ShopCategory category="kids"/>}/> 
        <Route path='/product' element={<Product/>}/>
        <Route path= ':productId' element= {<Product/>}/>
      
      <Route path='/cart' element={<Cart/>}/> 
      <Route path='/login' element={<LoginSignup/>}/> 

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
