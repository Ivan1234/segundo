import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {
  const user = {

    nombre: "Iván Ramírez",
    edad: 26,
    color: "Azul"

  };

  const saludarFn = (name, edad, color) =>{
    alert("Soy " + name + ", tengo " + edad + " y mi color favorito es el: " + color +".");
    alert(`Soy ${name}, tengo ${edad} y mi color favorito es el: ${color}.`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Saludar userInfo={user} saludarFn={saludarFn}/>
        </p>
      </header>
    </div>
  );
}

export default App;
