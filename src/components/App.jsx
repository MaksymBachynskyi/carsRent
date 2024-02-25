import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './LayoutComponent.jsx/Layout';

const Catalog = lazy(() => import('../pages/CatalogPage/catalog'));
const Favorites = lazy(() => import('../pages/FavoritePage/favorite'));
const Home = lazy(() => import('../pages/HomePage/home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};
