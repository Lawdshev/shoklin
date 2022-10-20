import MenuBar from './Components/Navbar';
import Hero from './Components/Hero';
import Hero2 from './Components/Hero2';
import './App.css';
import Footer from './Footer';
import Delivery from './Delivery';
import VIP from './VIP';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Hero/>
      <Hero2/>
      <VIP />
      <Delivery />
      <Footer />
    </div>
  );
}

export default App;
