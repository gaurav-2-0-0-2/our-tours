import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Loading from "./Loading";


import "./tailwind.output.css";

const url = "https://course-api.com/react-tours-project"



export default function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true)

  const removeTours = (id) =>{
      let newTours = tours.filter(tour=> tour.id !== id)
      setTours(newTours);
  }

  // festch the data through axios library instead of fetch() 
  const fetchData = async () =>{
      setLoading(true)
      try{
        let response = await fetch(url);
        let tours = await response.json();
        setLoading(false)
        setTours(tours)
      }
      catch(error){
        setLoading(false)
         console.log(error)
      }
  }
// fetchData();

useEffect(()=>{
  fetchData();
},[])

if(loading){
 return (
   <Loading/>
 )
}
if(tours.length === 0){
return(
  <div>
    <h1>no tours left</h1>
    <button onClick={()=>fetchData()}>refresh</button>
  </div>
)
}

  return (
    <div>
         <Cards tours={tours} removeTour={removeTours}/>
    </div>
  );
}
