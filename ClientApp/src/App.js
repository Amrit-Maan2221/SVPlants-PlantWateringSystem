import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';


function App() {
  return (
    <div className='content'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
