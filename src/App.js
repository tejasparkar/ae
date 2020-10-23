import React from 'react';
import HelloWorld from './components/HelloWorld';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css'
function App() {
  return (
    <div className="App">
    <ParallaxProvider>
     <HelloWorld/>
     </ParallaxProvider>
    </div>
  );
}

export default App;
