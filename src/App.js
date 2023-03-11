import React from 'react';
import LandingPage from './components/LandingPage'
import Map  from './components/Map';
// import IntroSection from './components/intro/Intro'
// import ContactSection from './components/contact-section/ContactSection'
// import MapSection from './components/map/Map' // import the map here
// import DisclaimerSection from './components/disclaimer/Disclaimer'
// import FooterSection from './components/footer/Footer'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier


function App() {
  return (
    <div className='App'>
    <LandingPage/>
    
    <Map />


    </div>
  );
}

export default App;
