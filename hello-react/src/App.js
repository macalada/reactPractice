import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bebana" hobby="eating">
        <p>I am almost two years old and i love to eat !</p>
      </Greet>
      <Greet name="Kitty" hobby="purring"/>
      <Greet name="Bubu" hobby="sleeping"/> */}
      {/* <Welcome name="baby" hobby="eating"/> */}
      {/* <Message/> */}
      < Counter/>

     
    </div>
  );
}

export default App;
