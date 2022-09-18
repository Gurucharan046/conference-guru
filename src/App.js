import './App.css';
import {Route,Routes} from "react-router-dom"
import Navabar from './components/navbar/navabar';
import Home from "./routes/home"

function App() {
  return (
    <div className="App">
      <Navabar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
