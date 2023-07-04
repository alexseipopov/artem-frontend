
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        axios("http://127.0.0.1:5000/cards", {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then(data => {
                console.log(data.data);
                setCards(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className="App">
            <h1>React 18 Alpha</h1>
            {cards.map(card => (
                <div className="card">
                    <h2>{card.id}</h2>
                    <p>{card.name}</p>
                </div>
            )  )}
        </div>
    );
}

export default App;
