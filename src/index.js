import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Pizza Data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
// End Pizza Data

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Fast React Pizza Co.</h1>
    </div>
  );
}
//
function Menu() {
  const pizzaDataNew = pizzaData;
  const pizzaDataLength = pizzaDataNew.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {pizzaDataLength > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working our menu. please come back later :</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoname="pizzas/spinaci.jpg"
        price={150}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoname="pizzas/funghi.jpg"
        price={250}
  />*/}
    </div>
  );
}
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.price + 3}</p>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(hour);
  return (
    <footer className="footer">
      {isOpen ? (
        <div>
          <p>We're open until {closeHour}:00. Come visit us or oder online</p>
          <button className="btn">Oder Now</button>
        </div>
      ):<p>We're happy to wellcome between {openHour}:00 to {closeHour}:00</p>}
    </footer>
  );
}
//

//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
