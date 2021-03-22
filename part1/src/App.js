import './App.css';
import Mensaje from './message.js'

const App = () => {

  return (
    <div className="App">
      <Mensaje color = 'red' message = 'Hola' />
      <Mensaje color = 'blue' message = 'a todos' />
      <Mensaje color = 'green' message = 'los que' />
      <Mensaje color = 'orange' message = 'están viendo' />
    </div>
  );
}

export default App;
