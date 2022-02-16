import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Component/Home/Banner/Banner";
import Home from "./Component/Home/Home/Home";
import Navigation from "./Component/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App background">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
