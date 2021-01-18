import React from 'react'
import './App.scss';

import Header from './components/Header/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
