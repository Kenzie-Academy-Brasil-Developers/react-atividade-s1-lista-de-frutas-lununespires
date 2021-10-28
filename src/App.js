import "./App.css";
import { useState } from "react";
import FruitList from "./components/FruitList";

const ListFruits = [
  { name: "banana", color: "yellow", price: 2 },
  { name: "cherry", color: "red", price: 3 },
  { name: "strawberry", color: "red", price: 4 },
];

function App() {
  const [fruits, setFruits] = useState(ListFruits);

  const fruitName = fruits.map((fruit, index) => {
    return <li key={index}>{fruit.name}</li>;
  });

  const filterRedFruits = () =>
    setFruits(fruits.filter((fruit) => fruit.color === "red"));

  const reset = () => setFruits(ListFruits);

  const totalPrice = fruits.reduce((acc, value) => {
    return value.price + acc;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="grocery">
          <ul>
            <FruitList fruitName={fruits} />
          </ul>
          <p>The full price: $ {totalPrice}</p>
        </div>
        <button onClick={filterRedFruits}>Filter for Red Fruits</button>
        <button onClick={reset}>Reset Filter</button>
      </header>
    </div>
  );
}

export default App;
