import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './LayoutComponent.jsx/Layout';

// const Reviews = lazy(() => import('./reviewsComponent.jsx/reviews'));
// const Home = lazy(() => import('pages/homePage.jsx/home'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};
