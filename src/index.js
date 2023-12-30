import React from "react";
import ReactDOM from "react-dom/client";

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
        <div>
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
    return <h1>Fast React Pizza Co.</h1>;
};

const Menu = () => {
    return (
        <div>
            <h2>Our Menu</h2>
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    );
};

const Pizza = () => {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
            <h2>Pizza Margherita</h2>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
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
    return <footer>We're currently open!</footer>;
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
