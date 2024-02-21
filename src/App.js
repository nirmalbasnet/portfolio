import logo from "./logo.svg";
import "./App.css";

function App() {
  const hooray = () => {
    alert("Horray! the app is deployed");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={hooray}>Learn React</button>
      </header>
    </div>
  );
}

export default App;
