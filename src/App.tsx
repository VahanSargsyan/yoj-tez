import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import MainPage from './pages/main/main.page';
import HeaderBar from './components/haeder/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar />
      </header>
      <section>
        <MainPage />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
