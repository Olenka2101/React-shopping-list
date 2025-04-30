
import './App.css';
import image from './shopping-211128-142332.jpg';
import imageTwo from './man-211128-142332.jpg';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='app'>
      <div className='container'>
    <img src={image} alt="shopping-top" width="200px"/>
    </div>
    <div className='container'>
    <h1>Grocery List</h1>
    </div>
   <GroceryList />
   <div className='container'>
    <img src={imageTwo} alt="man" width="200px"/>
    </div>
    </div>
  );
}

export default App;
