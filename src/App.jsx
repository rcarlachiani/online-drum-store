import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './components/Context/CartContext';
import NavBar from './components/Navbar/NavBar';
import Landing from './components/Landing/Landing';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (

    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/productos' element={<ItemListContainer titulo='Todos los productos' />} />
          <Route exact path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App