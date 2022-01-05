import { useMemo, useEffect } from 'react';
import './App.css';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import darkTheme from './mui/theme'; 

import { Provider } from 'react-redux';
import configureStore from './redux/store';

import Homepage from './pages/home/homepage';
import Login from './pages/auth/login';
import Account from './pages/profile/profile';
import Products from './pages/shopify/products';
import ContactUs from './pages/home/components/contactUs';
import AboutUs from './pages/home/components/aboutUs';
import ProductDetails from './pages/shopify/productDetails';

function App() {
  const theme = useMemo(() => createTheme(darkTheme()), [])

  // useEffect(() => {
  //   registerGSAP()
  // }, [])

  // const registerGSAP = () => {
  //   gsap?.registerPlugin(ScrollToPlugin)
  // }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={configureStore()}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/productDetails/:productID" element={<ProductDetails />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
