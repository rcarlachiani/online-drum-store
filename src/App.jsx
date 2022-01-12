import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer titulo='Todos los productos' />} />
        <Route exact path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
        <Route exact path='/checkout' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App