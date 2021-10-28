import "./style.css";

function FruitList({ fruitName }) {
  return fruitName.map((fruit, index) => <li key={index}>{fruit.name}</li>);
}

export default FruitList;
