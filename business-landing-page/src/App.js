import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Walkthrough } from './components/Walkthrough';
import { Footer } from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Walkthrough/>
      <Footer/>
    </div>
  );
}

export default App;
