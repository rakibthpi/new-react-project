import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import Granpa from './components/Granpa/Granpa';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandfather' element={<Granpa></Granpa>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
