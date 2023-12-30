import React from "react";
import ReactDOM from "react-dom/client";
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

function App() {
    return (
        //A function can only take 1 JSX Element wrapper *<div>*
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
        // <div>
        //     <h1>Hello?</h1>
        // </div>
    );
}

const Header = () => {
    // const style = {
    //     color: "red",
    //     fontSize: "64px",
    //     textTransform: "uppercase",
    // };
    const style = {};
    // to define an inline style, you must first allow for javascript to be mixed into the html using {} and then another {} must be used to create an object to list your styling.
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );
};

const Menu = () => {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10}
            />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mushrooms"
                price={12}
                photoName="pizzas/funghi.jpg"
            />
        </main>
    );
};

const Pizza = (props) => {
    console.log(props);
    // Destructuring props is cleaner then passing name.props etc..
    const { name, ingredients, photoName, price } = props;
    return (
        <div className="pizza">
            <img src={photoName} alt={name} />
            <div className="pizzas">
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{price}</span>
            </div>
        </div>
    );
};

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    // if (hour >= openHour && hour <= closeHour) {
    //     return <footer>We're currently open!</footer>;
    // }
    // return <footer>We're currently closed!</footer>;
    return <footer className="footer">We're currently open!</footer>;
    // return React.createElement("footer", null, "We're currently open!");
};

// React v18 root render.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // StrictMode renders our components twice to see if there are any specific bugs and checks to see if we're using outdated parts of the react API.
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before v18
// React.render(<App />);
