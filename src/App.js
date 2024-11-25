import React, { useEffect, useState } from 'react';
import './App.css';
// import Tempapp from './Tempapp';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Weather from './Weather';
// import axios from 'axios';


function App() {
  
  // const[data,setData]= useState();

  // // const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a6356ded9fd9d0d66e2976803b62d733`;

  // const [city,setCity] = useState();

  // const[country,setCountry] =useState();

  // const[temp,setTemp] = useState();

 

 


  // useEffect(()=>{

  
  //     const fetchApi = async()=>{

  //       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a6356ded9fd9d0d66e2976803b62d733`;

  //       const response = await fetch(url);
  //       const convert = await response.json();


        

  //       setData(convert.name );

  //       console.log(convert);

  //       setCountry(convert.sys.country);

        

  //       setTemp(convert.main.temp);





  //       // setData(convert.main.temp);
  //       // setCity(convert.Name);


  //       // console.log(data);
  //       // console.log(city);


  //       // updateData(convert);
    
  //       // console.log(city.main.temp);


     
  //     }

  //   fetchApi();
  // } )

  


// const getName = (fetchName)=>{

//   setCity(fetchName);
  
//   // console.log(setCity);
// }



  return (
    <div className="App ">

      {/* <Tempapp country={country}    Name={getName} /> */}


      <Weather/>

    
    </div>
  );
}

export default App;
