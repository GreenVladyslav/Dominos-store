import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import City from '../City/City';
import Spinner from '../Spinner/Spinner';

import PizzaTracker from '../../pages/PizzaTracker';

import Login from '../Authorization/Login';

import RequireAuth from '../Authorization/RequireAuth';
import UserProfile from '../../pages/UserProfile/UserProfile';

import News from '../../pages/News/News';

import NotFoundPage from '../../pages/NotFoundPage';

import Footer from '../Footer/Footer';

import MediaQueriesHeader from '../MediaQueries/MediaQueries';

import ScrollToTop from '../../utils/scrollToTop';

// import ErrorBoundary from '../errorBoundary/ErrorBoundary';
// header, categories, sidebar, footer, city,
import '../../utils/18n';

import '../../scss/app.scss';

const Pizza = lazy(() => import('../../pages/Pizza'));
const Drinks = lazy(() => import('../../pages/Drinks'));
const Sides = lazy(() => import('../../pages/Sides'));
const Desserts = lazy(() => import('../../pages/Desserts'));
const Main = lazy(() => import('../../pages/Main'));

const Basket = lazy(() => import('../../pages/Basket/Basket'));
const SinglePage = lazy(() => import('../../pages/SinglePage/SinglePage'));

const OrderPayment = lazy(() => import('../../pages/Payment/OrderPayment'));

function App() {
  return (
    <Router>
      <ScrollToTop />

      <MediaQueriesHeader />

      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/sets" element={<Navigate to="/pizza" />} />
            <Route path="/pizza/:id" element={<SinglePage />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/drinks/:id" element={<SinglePage />} />
            <Route path="/sides" element={<Sides />} />
            <Route path="/sides/:id" element={<SinglePage />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/desserts/:id" element={<SinglePage />} />
            <Route
              path="/pizzatracker"
              element={
                <RequireAuth>
                  <PizzaTracker />
                </RequireAuth>
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login pizzatracker={true} />} />

            <Route path="/cart" element={<Basket />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <UserProfile />
                </RequireAuth>
              }
            />
            <Route path="/single" element={<SinglePage />} />
            <Route path="/payment" element={<OrderPayment />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      <City />
    </Router>
  );
}

export default App;
