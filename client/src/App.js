import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Vip from './Pages/Vip';
import MyOrders from './Pages/MyOrders';
import MakeOrder from './Pages/MakeOrder';
import MenuBar from './Components/Navbar';
import Footer from './Components/Footer';
import Service from './Pages/Service'
import PriceList from './Pages/PriceList';
import SignIn from './Pages/SignIn';
import Logout from './Pages/Logout';
import { UserAuthContextProvider } from "./contexts/authContext";
import ProtectedRoute from './Utilities/protectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <UserAuthContextProvider>
        <MenuBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Vip" element={<Vip/>} />
          <Route path="/MyOrders" element={
            <ProtectedRoute>
              <MyOrders/>
            </ProtectedRoute>
          } />
          <Route path="/MakeOrder" element={<MakeOrder/>} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Logout" element={<Logout />} />
          {/* <Route path="/Payment" element={<Payment/>} /> */}
          <Route path="/Service" element={<Service/>} />
          <Route path="/PriceList" element={<PriceList/>} />
        </Routes>
        <Footer />
        </UserAuthContextProvider>
      </Router>
     
    </div>
  );
}

export default App;
