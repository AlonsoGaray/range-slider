import { useState } from 'react';
import './App.css';

const App = () => {
  const [price, setPrice] = useState(50)
  
  return (
    <div class="wrapper">
    <div class="amount">
      <sup>$</sup>
      <span class="dollars">{price.toFixed(2)}</span>
    </div>
    <input type="range" id="priceRange" min="0" max="100" step="0.1" onChange={(e)=> setPrice(e.target.value * 1)} />
    <br />
    <button onClick={()=> alert(`Bought at ${price.toFixed(2)}`)}>Buy Now</button>
    <script src="app.js"></script>
  </div>
  );
}

export default App;
