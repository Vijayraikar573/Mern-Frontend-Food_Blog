import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./components/Login"
import Signin from "./components/Signin"
import FoodPortal from "./components/FoodPortal"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/home/*" element={<FoodPortal/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
