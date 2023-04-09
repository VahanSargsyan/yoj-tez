import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import MainPage from './pages/main/main.page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Header</span>
      </header>
      <section>
        <MainPage />
      </section>
      <footer>
        <span>Footer</span>
      </footer>
    </div>
  );
}

export default App;
