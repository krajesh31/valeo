import './App.css';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './compound/navbar/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Footer from './compound/footer/Footer';
import FooterBottom from './compound/footer/FooterBottom';
import Calculator from './pages/CalculatorDrop';
import Pv from './compound/main/Pv';
import Wire from './compound/main/Wire'
import Energy from './compound/main/Energy'
import Quality from './compound/main/Quality'
import Facility from './compound/main/Facility'



function App() {
  return (
    <>

         <BrowserRouter>

          <Navbar />
  
          <div className="pages">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/product" component={Product} />
              <Route path="/calculator" component={Calculator}></Route>
              <Route path="/partners" component={Partners} />
              <Route path="/contact" component={Contact} />
              <Route path="/pv" component={Pv} />
              <Route path="/wire" component={Wire}/>
              <Route path="/energy" component={Energy} />
              <Route path="/quality" component={Quality} />
              <Route path="/facility" component={Facility} />



            </Switch>
          </div>

          <Footer/>
          <FooterBottom/>

          
        </BrowserRouter>
        </>
  );
}

export default App;
