import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Technology from './components/Technology';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Mission />
      <Technology />
      <Timeline />
      <Stats />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;