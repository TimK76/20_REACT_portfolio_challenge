import React from 'react';
import Selfie from '../../assets/images/Selfie1.png'
import ZenLake from '../../assets/images/pexels-s-migaj-747964b.png'
const Hero = () => {
    return ( 
        <section className="hero">
        
        <img src={Selfie} alt="Timothy Knight" id="selfie"/>
        <img src={ZenLake} style={{ width: "100%" }} alt="Man meditating at the end of a dock before a landscape of a mountain lake" id='zenLake'/>
       
        <h2 id="subtitle">De Profundis Liberati Sumus</h2>
        
    </section>
     );
}
 
export default Hero;