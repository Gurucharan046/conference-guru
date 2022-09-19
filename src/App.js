import './App.css';
import {Route,Routes} from "react-router-dom"
import Navabar from './components/navbar/navabar';
import Home from "./routes/home"
import About from './routes/about';
import Contactus from './routes/contactus';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Committees"/>
        <Route path='/Paper-Submission'/>
        <Route path='/Registration'/>
        <Route path='/Contact-us'element={<Contactus/>}/>
      </Routes>
    </div>
  );
}

export default App;
