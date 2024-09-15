import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MyComponent text="This text is passed as a prop to MyComponent" />
        <hr />
        <SecondComponent />
      </header>
    </div>
  );
}

export default App;