import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Schedule } from './components/Schedule';
import { Footer } from './components/Footer';
import { Cta } from './components/Cta';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Schedule/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
