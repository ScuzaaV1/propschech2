
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { football } from './Player.js';
import Playercard from './Component/Playercard.js';

function App() {
  
  return(
    <div>
      <Playercard list ={football} />
      <footer className='footer'>Made By Omar</footer>
    </div>
  )
}

export default App;