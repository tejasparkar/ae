import React ,{useEffect, useRef} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import  ScrollAnimation from 'react-animate-on-scroll';
import lottie from 'lottie-web'; 
const Components = () => {

    const Technology = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container : Technology.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('../web.json')
          },
          )
          console.log()
    })
    
    return(
  <React.Fragment>
    
    <Controller>
    
      <Scene duration={100} pin={true}>
      
        <section id="services" class="services">
        <div class="container">
  
          
  
          <div class="row">
            <div class="col-lg-6 order-2 order-lg-1">
            <ScrollAnimation animateIn='fadeIn'
            animateOut='fadeOut' delay='50'>
              <div class="icon-box mt-5 mt-lg-0  " >
                <i class="bx bx-receipt"></i>
                <h4>Est labore ad</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' delay='50'>
              <div class="icon-box mt-5" >
                <i class="bx bx-cube-alt"></i>
                <h4>Harum esse qui</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' delay='50'>
              <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="200">
                <i class="bx bx-images"></i>
                <h4>Aut occaecati</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' delay='50'>
              <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="300">
                <i class="bx bx-shield"></i>
                <h4>Beatae veritatis</h4>
                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
              </div>
              </ScrollAnimation>
            </div>
            <div class="col-lg-6 order-2 order-lg-2" >
            <div className="image" ref={Technology}>
                    
            </div>
            </div>
            
          </div>
  
        </div>
      </section>
      
      </Scene>
      
      <Scene duration={600} pin={true}>
      <section id="services" class="services">
      <div class="container">

        

        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1">
          
            <div class="icon-box mt-5 mt-lg-0  " >
              <i class="bx bx-receipt"></i>
              <h4>Est labore ad</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
           
           
            <div class="icon-box mt-5" >
              <i class="bx bx-cube-alt"></i>
              <h4>Harum esse qui</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
           
            
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-images"></i>
              <h4>Aut occaecati</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
           
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="300">
              <i class="bx bx-shield"></i>
              <h4>Beatae veritatis</h4>
              <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
            </div>
           
          </div>
          <div class="col-lg-6 order-2 order-lg-2">
          
            <div class="icon-box mt-5 mt-lg-0  " >
              <i class="bx bx-receipt"></i>
              <h4>Est labore ad</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
           
            
            <div class="icon-box mt-5" >
              <i class="bx bx-cube-alt"></i>
              <h4>Harum esse qui</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
           
            <div class="icon-box mt-5" >
              <i class="bx bx-images"></i>
              <h4>Aut occaecati</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
            
            <div class="icon-box mt-5">
              <i class="bx bx-shield"></i>
              <h4>Beatae veritatis</h4>
              <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
            </div>
            

         
          </div>
          
        </div>

      </div>
    </section>
      </Scene>
      
      <Scene duration={600} pin={true} >
      <section id="services" class="services">
      <div class="container">

        

        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1">
          
            <div class="icon-box mt-5 mt-lg-0  " >
              <i class="bx bx-receipt"></i>
              <h4>Est labore ad</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
           
            <div class="icon-box mt-5" >
              <i class="bx bx-cube-alt"></i>
              <h4>Harum esse qui</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
           
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-images"></i>
              <h4>Aut occaecati</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
            
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="300">
              <i class="bx bx-shield"></i>
              <h4>Beatae veritatis</h4>
              <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
            </div>
            
          </div>
          <div class="col-lg-6 order-2 order-lg-2">
          
            <div class="icon-box mt-5 mt-lg-0  " >
              <i class="bx bx-receipt"></i>
              <h4>Est labore ad</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
            
            <div class="icon-box mt-5" >
              <i class="bx bx-cube-alt"></i>
              <h4>Harum esse qui</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
            
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-images"></i>
              <h4>Aut occaecati</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
           
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="300">
              <i class="bx bx-shield"></i>
              <h4>Beatae veritatis</h4>
              <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
            </div>
            
         
          </div>
          
        </div>

      </div>
    </section>
      </Scene>
      <Scene duration={600} pin={true} >
       <section id="services" class="services">
        <div class="container">
  
          
  
          <div class="row">
            <div class="col-lg-6 order-2 order-lg-1">
            
              <div class="icon-box mt-5 mt-lg-0  " >
                <i class="bx bx-receipt"></i>
                <h4>Est labore ad</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
             
              <div class="icon-box mt-5" >
                <i class="bx bx-cube-alt"></i>
                <h4>Harum esse qui</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
             
              <div class="icon-box mt-5" >
                <i class="bx bx-images"></i>
                <h4>Aut occaecati</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
              
              <div class="icon-box mt-5" >
                <i class="bx bx-shield"></i>
                <h4>Beatae veritatis</h4>
                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
              </div>
             
            </div>
            <div class="col-lg-6 order-2 order-lg-2">
            
              <div class="icon-box mt-5 mt-lg-0  " >
                <i class="bx bx-receipt"></i>
                <h4>Est labore ad</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
             
              <div class="icon-box mt-5" >
                <i class="bx bx-cube-alt"></i>
                <h4>Harum esse qui</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
              
              <div class="icon-box mt-5" >
                <i class="bx bx-images"></i>
                <h4>Aut occaecati</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
             
              <div class="icon-box mt-5" >
                <i class="bx bx-shield"></i>
                <h4>Beatae veritatis</h4>
                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
              </div>
              
           
            </div>
            
          </div>
  
        </div>
      </section>
      </Scene>
     
    </Controller>
   
  </React.Fragment>
)};

export default Components;