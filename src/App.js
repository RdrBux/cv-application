import About from './components/Landing/About';
import Footer from './components/Landing/Footer';
import Hero from './components/Landing/Hero';
import Testimonial from './components/Landing/Testimonial';
import React, { Component } from 'react';
import Form from './components/Form';
import Nav from './components/Landing/Nav';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      creator: false,
    };
    this.goToCreator = this.goToCreator.bind(this);
  }

  goToCreator() {
    this.setState({ creator: true });
  }

  render() {
    if (this.state.creator) {
      return <Form />;
    }
    return (
      <div className="App">
        <Nav />
        <Hero />
        <About />
        <Testimonial />
        <Footer />
      </div>
    );
  }
}

export default App;
