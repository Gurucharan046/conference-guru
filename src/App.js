import './App.css';
import {Route, Routes, Navigate} from "react-router-dom"
import Home from "./routes/home"
import About from './routes/about';
import Committe from './routes/committe';
import Contactus from './routes/contactus';
import Registration from './routes/registration';
import Papersubmission from './routes/papersubmission';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Committees" element={<Committe/>}/>
        <Route path='/Paper-Submission' element={<Papersubmission/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Contact-us' element={<Contactus/>}/>
      </Routes>
    </div>
  );
}

export default App;
