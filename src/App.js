import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Services from './components/services';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Signup from './components/Sign-up';
import Product from './components/Product';


function App() {
  return (
    <>
    <Navbar/>
  <Routes>
 <Route path={'/'} element={<Home/>} ></Route>
<Route path={'/Services'} element={<Services/>} ></Route>
 <Route path={'/sign-up'} element={<Signup/>} ></Route>
 <Route path={'/Product'} element={<Product/>} ></Route>
  </Routes>

  <Footer/>

 </>
  );
}

export default App;
