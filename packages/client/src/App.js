import dndler from './dndler.gif';
import './App.css';
import HomePage from './containers/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dndler} alt="Art thou feeling it now Mr. Krabs?" />
        <span>DNDLER</span>
      </header>
      <HomePage />
    </div>
  );
}

export default App;
