import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import { Counter } from './features/counter/Counter';

import MainPage from './pages/main/main.page';
import HeaderBar from './components/haeder/header';
import Footer from './components/footer/footer';

import './App.css';
import StatisticPage from './pages/statistic/statistic.page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar />
      </header>
      <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
   
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
