import React,{useEffect ,useState} from 'react';
import WeatherApp from './Components/WeatherApp';
import loder from './Components/Loader';
import Loader from './Components/Loader';


function App() {
  const [loading , set] = useState(false);
  useEffect(()=>{
    set(true)
    setTimeout(()=>{
      set(false)
    },4000)

  },[])

  return (
    <div className="App">
     

  {
    loading ? <Loader/>:<WeatherApp/>
  }
    


     

    </div>
  );
}

export default App;
