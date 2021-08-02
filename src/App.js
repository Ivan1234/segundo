import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Saludar name="Iván Ramírez" edad="25"/>
          <Saludar name="José" edad="29"/>
        </p>
      </header>
    </div>
  );
}

export default App;
