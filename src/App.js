// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
// import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/Shop' element={<Shop></Shop>}></Route>
        <Route path='/Orders' element={<Orders></Orders>}></Route>
        <Route path='/Inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/About' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
