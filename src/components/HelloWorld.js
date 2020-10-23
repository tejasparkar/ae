import React ,{useEffect, useRef} from 'react'
import  ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';
import lottie from 'lottie-web'; 
import Header from './Header';
import Logo from './ae.svg'
import Components from './Components' 
import Parallel from './Parallax'
const HelloWorld = () => {

    
    const container = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container : container.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('../about.json')
          },
          )
    })
   
        
    return (
        <React.Fragment>

            <ScrollAnimation animateIn='flipInY'
                animateOut='fadeOut'>
                
            <section id="hero">
              
            <Particles
       className="show-mobile-none"
    params={{
      "fps_limit": 28,
      
      "particles": {
          "collisions": {
              "enable": true
          },
          "number": {
              "value": 200,
              "density": {
                  "enable": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 40,
              "opacity": 0.4,
              "color":"#fff"
          },
          "move": {
              "speed": 1
          },
          "opacity": {
              "anim": {
                  "enable": true,
                  "opacity_min": 0.05,
                  "speed": 0.5,
                  "sync": false
              },
              "value": 0.4
          },
          "color": {
            "value": "#ff0000"
          },
      },
      "polygon": {
          "enable": true,
          "scale": 0.5,
          "type": "inline",
          "move": {
              "radius": 10
          },
          "url":Logo,
          "inline": {
              "arrangement": "equidistant"
          },
          "draw": {
              "enable": true,
              "stroke": {
                  "color": "rgba(255, 255, 0, .1)"
              }
          }
      },
      
      "retina_detect": false,
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "bubble"
              }
          },
          "modes": {
              "bubble": {
                  "size": 4,
                  "distance": 40,
                  "color" : "#ff0000"
              },
              "type":"rectangle",

          }
      }
  }} />
            <Particles  
           
            params={{
              "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }
                }
            }
            }}/>
                <div class="hero-container">
                
                <ScrollAnimation animateIn='flipInY'
                animateOut='fadeOut'>
              
                    <a href="" class="hero-logo"style={{ 'height':'12rem','display':'none' }} >
                        <img style={{ 'height':'12rem','display':'none' }} src="assets/img/hero-logo.png" alt="" />
                    </a>
                </ScrollAnimation> 
                <ScrollAnimation animateIn='flipInX'
                animateOut='fadeOut'>      
                    <h1 >Welcome To Andeverywhere</h1>
                    <h2 >We are team of talanted people with you can touch the sky</h2>
                    <a  href="#about" class="btn-get-started scrollto">Get Started</a>
                </ScrollAnimation> 
                    </div>
                    
            </section>
            </ScrollAnimation>
            <Header/>
            <main id="main">
            <ScrollAnimation animateIn='zoomIn'
            animateOut='zoomOut' >
            <section id="about" class="about">
            <div class="container">
      
              <div class="section-title" >
                <h2>About Us</h2>
                <p>Magnam dolores commodi suscipit eius consequatur</p>
              </div>
      
              <div class="row">
                <div class="col-lg-6" >
                <ScrollAnimation animateIn='flipInX'
                animateOut='fadeOut'>
                <div class="image" ref={container}>
                    
                </div>
                </ScrollAnimation>
                  
                </div>
                <div class="col-lg-6" >
                  <div class="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
                    <h3>Voluptatem dignissimos provident quasi corporis</h3>
                    <p class="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i class="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                </div>
              </div>
      
            </div>
          </section>
            
            </ScrollAnimation>
            <div class="section-title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
          </div>
           <Components/>
           <Parallel/>
           <br/>
           <div class="section-title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
            <div class="col-lg-6" >
        
          </div>
            </div>
          <Parallel/>
            </main>
            {/* Hero Section */}

 

        </React.Fragment>
    )
}

export default HelloWorld
