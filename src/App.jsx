import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import * as bootstrap from 'bootstrap';
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
        <Route exact path='/checkout' element={<Cart />} />
        <Route exact path='/detalle' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
