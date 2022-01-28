import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path ='/' element={<ItemListContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route exact path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
