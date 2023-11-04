
import React,{useEffect ,useMemo} from "react";
import gsap from 'gsap';



export default function WeatherApp() {
 

  useEffect(() => {    
    console.log("hello the componet is called")  
     const tl = gsap.timeline();
    // tl.from('#a1', {y:-1000, ease:"bounce.in", duration: 2 ,opacity:1})
    // tl.from('#a2', {y:-1000, ease:"bounce.out", duration: 3, delay:3 ,opacity:1})
    // tl.from('#a3', {y:-1000, ease:"bounce.inOut", duration: 3, delay:6  ,opacity:1 })
    setTimeout(()=>{
      tl.from('#a1', {opacity:0})
      
    },500)
    setTimeout(()=>{
      tl.from('#a1', {opacity:1})
      tl.from('#a2', {opacity:0})
    },500)
    setTimeout(()=>{
      tl.from('#a2', {opacity:1})
      tl.from('#a3', {opacity:0})
    },500)
    setTimeout(()=>{
     
      tl.from('#a3', {opacity:1})
      tl.from('#a4', {opacity:0})
    },500)
    setTimeout(()=>{
   
      tl.from('#a4', {opacity:1})
      tl.from('#input-box' ,{})
    },500)


   


  }, []);
   
    const search = async() =>{
        const ele = document.getElementById('input-box');
        if(ele === ""){
            return 0;
        }

        let url =`https://api.openweathermap.org/data/2.5/weather?q=${ele.value}&units=Metric&appid=6fb36cd34284c29d4cf37bb2b43e1bf3`

        let res = await fetch(url)
        let data = await res.json();

        console.log(url);
        console.log(data.main);
       
        console.log(data.main.temp_min);
        console.log(data.name);
        

        document.getElementById("cname").innerText = data.name  ;
        document.getElementById("ctemp").innerText = data.main.temp+"°C";
        document.getElementById("fltemp").innerText = data.main.feels_like+"°C";
        document.getElementById("maxtemp").innerText = data.main.temp_max+"°C";
        document.getElementById("mintemp").innerText = data.main.temp_min+"°C";
        document.getElementById("des").innerText = data.weather[0].description ;
        if(data.weather[0].main == "Clear"){
          console.log("hello")
          document.getElementById("op").style.backgroundImage = "url('https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-7709.jpg')"
        }else if(data.weather[0].main == "Clouds" ){
          document.getElementById("op").style.backgroundImage = "url('data:image/jpeg;base64,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')"
        }
        else if(data.weather[0].main == "Rain" ){
          document.getElementById("op").style.backgroundImage = "url('data:image/jpeg;base64,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')"
        }
        else if(data.weather[0].main == "Drizzle" ){
          document.getElementById("op").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAhOBg3K8IzTQ9JlCvWbYlFvsa8QfyCZHOw&usqp=CAU')"
        }
        else if(data.weather[0].main == "Mist" ){
          document.getElementById("op").style.backgroundImage = "url('data:image/jpeg;base64,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')"
        }else{
          console.log("hey")
          document.getElementById("op").style.backgroundImage = "url('https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-7709.jpg')"
        }
        
        document.getElementById("op").style.backgroundSize = 'cover';

    }
     

  return (

   
    <div className='container text-bg-dark ' id="op">
        <section className="vh-100">
  <div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <h3 className="mb-4 pb-2 fw-normal h1" >
            <a id="a1">Check </a>
            <a id="a2">the </a> 
            <a id="a3">weather </a>
            <a id="a4" >Report</a>
        </h3>

        <div className="input-group rounded mb-3 p-1 m-1">
          <input type="search" className="form-control rounded input_box" id="input-box" placeholder="City" aria-label="Search"
            aria-describedby="search-addon" />
          <a href="#!" type="button" onClick={()=>{search()}}>
            <span className="input-group-text border-0 fw-bold m-1" id="search-addon">
              Check!
            </span>
          </a>
        </div>
        <div className="card shadow-0 border">
          <div className="card-body p-4">

            <h4 className="mb-1 sfw-normal" id='cname'>New York, US</h4>
            <p className="mb-2">Current temperature: <strong id='ctemp'>5.42°C</strong></p>
            <p>Feels like: <strong id='fltemp'>4.37°C</strong></p>
            <p>Max: <strong id='maxtemp'>6.11°C</strong>, Min: <strong id='mintemp'>3.89°C</strong></p>

            <div className="d-flex flex-row align-items-center">
              <p className="mb-0 me-4" id='des'>Scattered Clouds</p>
            
            </div>
            <img className='l' src='clear.png' alt="" />

          </div>
        </div>

      </div>
    </div>

  </div>
</section>




   

    </div>
  )
}
