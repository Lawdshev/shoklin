import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Payment from './Pages/Payment';
import MenuBar from './Components/Navbar';
import Footer from './Components/Footer';
import Service from './Pages/Service'
import DryCleaning from './Pages/DryCleaning';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/DryCleaning" element={<DryCleaning/>} />
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
