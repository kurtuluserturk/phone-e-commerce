import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
