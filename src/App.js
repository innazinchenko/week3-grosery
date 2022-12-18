import './App.css';
import image from './shoping.jpg';
import newimage from './man.jpg';
import { GroseryList } from './GroseryList';

function App() {
  return (
    <div className='app'>
       <div className="container">
      <img src={image} width="250px" alt='shop'/>
      </div>
      <div className="container">
      <h1>Grocery list</h1>
      </div>
      <GroseryList/>
      <div className="container">
      <img src={newimage} width="250px" alt='delivery'/>
      </div>
    </div>
  );
}

export default App;
