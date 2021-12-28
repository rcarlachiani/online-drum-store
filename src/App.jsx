import { useState } from 'react'
import './App.css'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo='Catalogo de productos' />
    </div>
  )
}

export default App
