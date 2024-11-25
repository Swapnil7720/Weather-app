import React, {  useEffect, useState } from "react";
import "./Tempapp.css"


const Weather =()=>{

    const[city,setCity] = useState("mumbai");
    const[updateCity,setUpCity] = useState('');
    const[temp,setTemp] = useState(0);
    const[sky,setSky] = useState();
    const[country,setCountry]= useState();

    // const[newCity,setNewCity] = useState();

    const[wind,setWind] = useState();
    const[min,setMin]= useState();
    const[max,setMax]= useState();
    const[humid,setHumid]= useState();


    // const url = `https://api.openweathermap.org/data/2.5/weather?q=city&appid=a6356ded9fd9d0d66e2976803b62d733`;

    useEffect(()=>{

        const fetchApi = async() =>{

            const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a6356ded9fd9d0d66e2976803b62d733`;

            const response = await fetch(url);

            const convert = await response.json();

            console.log(convert);

            setUpCity(convert.name);
            setTemp(convert.main.temp);
            setSky(convert.weather[0].description);
            setCountry(convert.sys.country);
            setWind(convert.wind.speed);
            setMin(convert.main.temp_min);
            setMax(convert.main.temp_max);
            setHumid(convert.main.humidity);
        }
        fetchApi();
    })

    const getName =(event) =>{

        setCity(event.target.value);
    }

    return(

        <>
        
       <div className="container-fluid  ">
   
        <div className="row justify-content-center"  >

       <div className="col-12 col-lg-6 shadow-lg p-5">

           <div className="card border-0 bg-transparent shadow-lg">

                <div className="search color-bg p-4     rounded-5 border-0">
                   <input type="search py-3 px-5 bg-danger" onChange={getName} className="rounded-pill px-3 py-2 border " placeholder="Enter city"></input>
                   {/* <button className="btn bg-primary ms-5"  >Check</button> */}
               </div>

               <hr/>
       
               <div className="card color-bg p-5 text-white border-0 rounded-5">

                   <h2 className="text-center"> {updateCity}</h2>
                   <hr/>

                   <p>Country : {country}</p>
                   {/* <p>Date And Time| Monday</p> */}

                   <h4>{temp}°C  || {Math.floor(temp*9/5+32)} °f</h4>

                   <p> Min:  {min},    Max: {max}</p>

                   <h4>{sky}</h4>

                   <p> humidity: {humid}</p>
                   <p>Wind Speed : {wind}</p> 

                   <img  className="w-25 position-absolute start-50 top-50 img-fluid " src="https://cdn.iconscout.com/icon/free/png-256/cloudy-weather-11-1147979.png" />
  
               </div>
         
           
         
         </div>   


       </div>
   </div>
 </div>
        </>
        
    );
}

export default Weather;