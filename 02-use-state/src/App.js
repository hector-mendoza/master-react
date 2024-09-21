import logo from './logo.svg';
import './App.css';
import Year from './components/Year';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Sample Exercise</h1>
        <Year year={currentYear} />
      </header>
    </div>
  );
}

export default App;
