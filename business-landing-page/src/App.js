import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Walkthrough } from './components/Walkthrough';
import { Prototype } from './components/Prototype'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Walkthrough/>
      <Prototype/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
