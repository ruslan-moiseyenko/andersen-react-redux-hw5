import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  About,
  Layout,
  Product,
  CartPage,
  NotFound
} from './pages/index';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='not-found' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
