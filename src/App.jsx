import './App.css'
import Location from './components/Location'
import Residents from './components/Residents'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Buscador from './components/Buscador'

function App() {

  const [residentsArray, setResidentsArray] = useState({});
 

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/3")
      .then((resp) => setResidentsArray(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='App'>

    
    <Buscador setResidentsArray={setResidentsArray}/>
     <Location data={residentsArray}/>
   <div className='container_residents'>
    {
     residentsArray?.residents?.map(resident => (
      <Residents
       key={resident} 
       residentsData={resident} 
       /> 
       ))
    }
  </div>
  
   </div> 
   )
   
   
}

export default App
