import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Payment from './Pages/Payment';
import MenuBar from './Components/Navbar';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Payment" element={<Payment/>} />
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
