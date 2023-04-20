import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage";
import Button from "./components/shared/button"


function App() {
  return <div className="App">
    <AdvertsPage />
    <Button variant = "relleno" onClick={event => console.log(event)} >Click me! </Button>
  </div>;
}

export default App;
