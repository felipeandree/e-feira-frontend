import { Routes, Route } from 'react-router';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import SingleSupplier from '../pages/SingleSupplier';
import ProductDetails from '../pages/ProductsDetails';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/fornecedor/:id" element={<SingleSupplier />} />
        <Route path="/products" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;
