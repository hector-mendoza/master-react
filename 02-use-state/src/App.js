import logo from './logo.svg';
import './App.css';
import UsingState from './components/UsingState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>React States - useState</h1>
        <UsingState />
      </header>
    </div>
  );
}

export default App;
