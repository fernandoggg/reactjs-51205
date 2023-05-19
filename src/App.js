import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import Cart from './Components/'
import { CartProvider } from './context/CartContext'
import "./services/firebase/firebaseConfig"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<checkout/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      {/* <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`Cantidad agregada`, quantity)}/>
      <ItemDetailContainer/> */}
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
