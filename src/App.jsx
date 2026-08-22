import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import CustomNav from './components/CustomNav';
import ShopContextProvider from './context/shopContext';
import Home from './pages/home/Home';

function App() {

  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <CustomNav></CustomNav>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>

    </>
  )
}

export default App
