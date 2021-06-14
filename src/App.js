import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";
import Icon from "./components/Icon";

function App() {
  return (
    <div className="app">
      <Map>
        <Icon lat={59.955413} lng={30.337844}></Icon>
      </Map>
    </div>
  );
}

export default App;
