import About from './components/Landing/About';
import Blog from './components/Landing/Blog';
import Faq from './components/Landing/Faq';
import Footer from './components/Landing/Footer';
import Hero from './components/Landing/Hero';
import Newsletter from './components/Landing/Newsletter';
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
        <Nav onClick={this.goToCreator} />
        <Hero onClick={this.goToCreator} />
        <About />
        <Testimonial />
        {/* <Blog />
        <Newsletter /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
