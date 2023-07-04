import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect} from "react";

function App() {
    useEffect(
        () => {
            axios.get("htth://localhost:5000/card")
                .then(data => {
                    console.log(data.data);
                })
        }
    )
  return (
    <div className="App">
        <h1>React 18 Alpha</h1>
    </div>
  );
}

export default App;
