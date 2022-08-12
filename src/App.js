import About from './components/Landing/About';
import Faq from './components/Landing/Faq';
import Footer from './components/Landing/Footer';
import Hero from './components/Landing/Hero';
import Newsletter from './components/Landing/Newsletter';
import Testimonial from './components/Landing/Testimonial';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Testimonial />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
