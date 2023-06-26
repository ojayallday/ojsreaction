import logo from './logo.svg';
import React from 'react';
import '../Styles/App.css';
import Header from './Header';
import AboutUs from './AboutUs';
import Footer from './Footer';
import ProductList from './ProductList';

function App() {
  return (
    <React.Fragment>
      <div>
       <Header/>
       <ProductList/>
       <AboutUs/>
       <Footer/>

      </div>
    </React.Fragment>
    
  );
}

export default App;
