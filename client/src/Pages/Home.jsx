import MenuBar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Hero2 from '../Components/Hero2';
import Footer from '../Components/Footer';
import Delivery from '../Components/Delivery';
import VIP from '../Components/VIP';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Hero2/>
      <hr/>
      <VIP />
      <Delivery />
    </div>
  );
}

export default App;