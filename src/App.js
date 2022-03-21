import './App.scss';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import { Cta } from './components/Cta/Cta';
import { Prototype } from './components/Prototypes/Prototype';
import { Features } from './components/Features/Features';
import { Socials } from './components/Socials/Socials';
import { Testimonials } from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Features/>
      <Prototype/>
      <Testimonials/>
      {/* <Socials/> */}
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
