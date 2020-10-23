import React ,{useEffect,useState} from 'react';

import  ScrollAnimation from 'react-animate-on-scroll';

export default function Header() {
    const [tooglebtn ,Tooglebtn] = useState({tooglebtn : false});


    const ToogleData = ()=>{
        Tooglebtn(tooglebtn => !tooglebtn)
        
     }
    
     const mobNav = {
       'position': 'fixed',
        'top': '55px',
        'right': '15px',
        'bottom': '15px',
        'left': '15px',
        'z-index': '9999',
        'overflow-y': 'auto',
        'background': '#fff',
        'transition': 'ease-in-out 0.2s',
        'opacity': '0',
        'visibility': 'hidden',
        'border-radius': '10px',
        'padding': '10px 0'
     }
    
     const InnerMob = {
        'margin': '0',
        'padding':'0',
        'list-style': 'none'
     }
    return (
        <React.Fragment>
        
        {!tooglebtn ? (
           
        <div className=" fixed-top bg-white  cover-full z-9999 left-0 top-0 container " style={{ 'margin-top':'1rem','border-radius':'10px', 'width':'80%' ,'padding':'1rem' }}>
        <ScrollAnimation animateIn='zoomIn' animateOut="zoomOut">
        <nav class="d-lg-none" style={{ mobNav }} >
        <ul class="" style={{ InnerMob }}>
          <li class=""><a href="index.html">Home</a></li>
          
          <li><a href="#services">Services</a></li>

          

          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </nav>
      </ScrollAnimation>
     
    </div>
    
    ):(null)}
       
        <div id="header-sticky-wrapper" className="sticky-wrapper sticky-top ">
        <header id="header" class="d-flex align-items-center">
            <div class="container">
            <button onClick={ToogleData} type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>
               
                <div class="logo d-block d-lg-none">
               
                    <a href="index.html">
                    <img src="assets/img/logo.png" alt="" class="img-fluid" />
                    
                    </a>
                    
                    </div>
                
                <nav class="nav-menu d-none d-lg-block mobnav" >
                    <ul class="nav-inner" >
                        <li class=""><a href="index.html">Home</a></li>
                        <li class="drop-down"><a href="">About</a>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#team">Team</a></li>

                                <li class="drop-down"><a href="#">Deep Drop</a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#services">Services</a></li>
                        <ScrollAnimation animateIn='zoomIn'>
                        <li class="nav-logo"><a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a></li>
                        </ScrollAnimation>
                       

                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>
                </nav>
        
      

            </div>
        </header>
   
    
    </div>
        </React.Fragment>
    )
}
