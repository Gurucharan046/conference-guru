import './App.css';
import {Route, Routes, Navigate} from "react-router-dom"
import Home from "./routes/home"
import About from './routes/about';
import Committe from './routes/committe';
import Contactus from './routes/contactus';
import Registration from './routes/registration';
import CallForPapers from './routes/callForPapers';
import RegistrationForm from './routes/registerForm';
import PaymentInfo from './routes/paymentInfo';
function App() {
  return (
    <div className="App">
      
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" replace />}/> */}
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/home" element={<Home/>}/> */}
        <Route path="/about" element={<About/>}/>
        <Route path="/Committees" element={<Committe/>}/>
        <Route path='/call-for-papers' element={<CallForPapers/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Contact-us' element={<Contactus/>}/>
        <Route path='/register-here' element={<PaymentInfo/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
