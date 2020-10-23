import React from 'react';
import { Parallax, Background } from 'react-parallax';
const Parallel = () => {
    const image = "assets/img/bg.png";
    
    return(
        <div>
        <Parallax
        bgImage={image}
        strength={400}
        renderLayer={percentage => (
            <div
                
            />
        )}
    >
        <p style={{ 'height':500 }}></p>
    </Parallax>
            </div>
    )
}


export default Parallel;