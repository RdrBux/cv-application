/* import About from './components/Landing/About';
import Blog from './components/Landing/Blog';
import Faq from './components/Landing/Faq';
import Footer from './components/Landing/Footer';
import Hero from './components/Landing/Hero';
import Newsletter from './components/Landing/Newsletter';
import Testimonial from './components/Landing/Testimonial'; */
import React, { Component } from 'react';
import Form from './components/Form';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        {/* <Hero />
      <About />
      <Testimonial />
      <Blog />
      <Newsletter />
      <Footer /> */}
      </div>
    );
  }
}

export default App;
