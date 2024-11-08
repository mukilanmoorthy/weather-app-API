let getWeather = async(city)=>{
let  weatherAPI='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=5df9598c0e0a6568596e16aa1c6c156f&units=metric';

let weatherObj =await fetch(weatherAPI);
let response = weatherObj.json();
return response;
}

async function callWeather(){
 
 
  try{
   let response =await getWeather('Ooty')
    console.log(response);
      console.log("Country :",response['sys']['country']);
      console.log("City :",response['name']);
      console.log("Temparature :",response['main']['temp']);
      console.log("Max Temparature :",response['main']['temp_max']);
      console.log("Min Temparature :",response['main']['temp_min'])
      console.log("Description :",response['weather'][0]['description']);
      console.log("Wind Speed :",response['wind']['speed']);
      console.log("The weather information has been retrived sucessfully.");
  }catch(err){
  console.log(err);
  }
}
callWeather(); 

