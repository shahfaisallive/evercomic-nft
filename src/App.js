import React from 'react';

// Importing components
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import AboutYou from './components/AboutYou';
import Specs from './components/Specs'
import Gallery from './components/Gallery';
import Roadmap from './components/Roadmap';
import OurTeam from './components/OurTeam';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <AboutYou />
      <Specs />
      <Gallery />
      <Roadmap />
      <OurTeam />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
