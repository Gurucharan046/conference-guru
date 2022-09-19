import './App.css';
import {Route,Routes} from "react-router-dom"
import Navabar from './components/navbar/navabar';
import Home from "./routes/home"
import About from './routes/about';

function App() {
  return (
    <div className="App">
      <Navabar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
