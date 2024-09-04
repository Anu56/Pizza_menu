import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza margerita",
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
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/*<div>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </div>

      <div>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            photoName={pizza.photoName}
          />
        ))}
        </div>*/}
      <ul className="pizzas">
        <Pizza
          name="margherita"
          ingredients="tomato and mozarella"
          photoName="pizza/margherita.jpg "
          price={10}
        />
        <Pizza
          name="Pizza Salamino"
          ingredients="Tomato, mozarella, and pepperoni"
          photoName="pizza/salamino.jpg "
          price={15}
        />
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="pizza/spinaci.jpg "
          price={12}
        />
        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={18}
          photoName="pizza/prosciutto.jpg"
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={12}
          photoName="pizza/funghi.jpg"
        />
        <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          price={6}
          photoName="pizza/focaccia.jpg"
        />
      </ul>
    </main>
  );
}
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <h3>{new Date().toLocaleTimeString()} We're currently open</h3>
    </footer>
  );
}

export default App;
