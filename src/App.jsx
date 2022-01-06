import { useState } from 'react'
import './App.css'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo='Catálogo de productos' />
      <ItemDetailContainer />
    </div>
  )
}

export default App
