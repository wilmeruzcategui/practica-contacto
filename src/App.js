import logo from './logo.svg';
import './App.css';
import ListContactComponent from './components/ListContactComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListContactComponent></ListContactComponent>
      </header>
    </div>
  );
}

export default App;
