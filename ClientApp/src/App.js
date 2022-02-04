// Name: Amritpal Singh
// File Name: App.js
// Date: 31 January 2022
// Descrition: All components combines here..



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
