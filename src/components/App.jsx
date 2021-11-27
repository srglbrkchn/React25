import React, {useState} from "react";

function App() {

    let [time, setTime] = useState(new Date().toLocaleTimeString());

    function getTime() {
      setTime(new Date().toLocaleTimeString());
    }

    setInterval(getTime, 1000);

    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={getTime}>Get Time</button>
        </div>
    );
}

export default App;
