import logo from './logo.svg';
import './App.css';
import {Header} from './compoent/Header';
import {Navbar} from './compoent/Navbar';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";
import {ProductGrid} from './compoent/ProductGrid';
import {ProductDetails} from './compoent/ProductDetails';
import {Footer} from './compoent/Footer';

function App() {
  return (

    <Router>
  
    <Header/>
    <br/><br/><br/>
    <Navbar/>
    <br/><br/><br/>
    


    <Routes>

  {/* <Route path="/" element={<Products/>}> */}
  <Route path="/" element={<ProductGrid/>} />
  <Route path=":productid" element={<ProductDetails/>} />
  {/* </Route> */}

</Routes>

<Footer/>
</Router>



  );
}

export default App;
