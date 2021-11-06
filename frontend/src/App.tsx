import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = React.useState<any>();
  React.useEffect(() => {
    axios.get("http://localhost:5000/cars").then((response) => {
      if (response.data) {
        setData(response.data);
      }
    });
  }, []);
  if (!data) return <div>Loading</div>;
  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
