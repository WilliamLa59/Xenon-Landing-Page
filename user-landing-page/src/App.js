import './App.scss';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import { Cta } from './components/Cta/Cta';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Cta/>
    </div>
  );
}

export default App;
