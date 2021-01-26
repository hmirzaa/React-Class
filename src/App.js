import logo from './logo.svg';
import './App.css';
import { Greet } from './components/MyName'
import GreetClass from './components/GreetClass'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet />
        <GreetClass />
      </header>
    </div>
  );
}

export default App;
