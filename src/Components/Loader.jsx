import React, { useEffect, useRef } from 'react';
import './loading.css'

import gsap from 'gsap';

  export default function Loader() {
    

    useEffect(() => {    
      console.log("Loader is called.....")  
      const t = gsap.timeline();
      // setTimeout(()=>{
        t.from('#p', { backgroundColor: '#3498db',duration:0.2})
        t.from('#p', { backgroundColor: '#FF0000',duration:0.2})
        t.from('#p', { backgroundColor: '#00FFFF',duration:0.2})
        t.from('#p', { backgroundColor: '#3498db',duration:0.2})
        t.from('#p', { backgroundColor: '#00008B',duration:0.2})
        t.from('#p', { backgroundColor: '#ADD8E6',duration:0.2})
        t.from('#p', { backgroundColor: '#800080',duration:0.2})
        t.from('#p', { backgroundColor: '#FFFF00',duration:0.2})
        
        t.from('#p', { backgroundColor: '#3498db',duration:0.2})
        t.from('#p', { backgroundColor: '#00008B',duration:0.2})
        t.from('#p', { backgroundColor: '#ADD8E6',duration:0.2})
        t.from('#p', { backgroundColor: '#800080',duration:0.2})
        t.from('#p', { backgroundColor: '#3498db',duration:0.2})
        t.from('#p', { backgroundColor: '#00008B',duration:0.2})
        t.from('#p', { backgroundColor: '#ADD8E6',duration:0.2})
        t.from('#p', { backgroundColor: '#800080',duration:0.2})
        
        t.from('#p', { backgroundColor: '#FF0000',duration:0.2})
        t.from('#p', { backgroundColor: '#00FFFF',duration:0.2})
        t.from('#p', { backgroundColor: '#3498db',duration:0.2})
        t.from('#p', { backgroundColor: '#00008B',duration:0.2})
        t.from('#p', { backgroundColor: '#ADD8E6',duration:0.2})
        t.from('#p', { backgroundColor: '#800080',duration:0.2})
        t.from('#p', { backgroundColor: '#FFFF00',duration:0.2})
        
        t.from('#p', { backgroundColor: '#3498db',duration:0.2})
        t.from('#p', { backgroundColor: '#00008B',duration:0.2})
        t.from('#p', { backgroundColor: '#ADD8E6',duration:0.2})
        t.from('#p', { backgroundColor: '#800080',duration:0.2})
        t.from('#p', { backgroundColor: '#3498db',duration:0.2})
        t.from('#p', { backgroundColor: '#00008B',duration:0.2})
        t.from('#p', { backgroundColor: '#ADD8E6',duration:0.2})
        t.from('#p', { backgroundColor: '#800080',duration:0.2})
      // },500)

      
      
  
    }, []);
    
  
    return (
      <div className="loading-screen" id='p'><h1>Loading </h1>
        <div className="loading-spinner"></div>
      </div>
    );
  }