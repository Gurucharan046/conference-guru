import './App.css';
import {Route,Routes} from "react-router-dom"
import Navabar from './components/navbar/navabar';
import Home from "./routes/home"
import Contactus from './routes/contactus';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Committees"/>
        <Route path='/Paper-Submission'/>
        <Route path='/Registration'/>
        <Route path='/Contact-us'element={<Contactus/>}/>
      </Routes>
    </div>
  );
}

export default App;
