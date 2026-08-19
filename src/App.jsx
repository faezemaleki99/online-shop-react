import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import CustomNav from './components/CustomNav';
import ShopContextProvider from './context/shopContext';
import Welcome from './components/Welcome';

function App() {

  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <CustomNav></CustomNav>
          <Welcome></Welcome>
          <Routes>
            <Route path='/' element={<Shop></Shop>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>

    </>
  )
}

export default App
