import React,{useState} from 'react'; 
const api={
  key:"b7d2c632a5a1427be6efac1e145b428e",
  base:"https://api.openweathermap.org/data/2.5/"
}
function App() {
const [query,setQuery]=useState('');
const[weather,setWeather]=useState({});

const search=evt=>{
  if(evt.key==="Enter"){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(result=>{
      setWeather(result)
    setQuery('');
    console.log(weather);
  });
  }
}

  const dateReturn=(d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 let day=days[d.getDay()];
 let date=d.getDate();
 let month=months[d.getMonth()];
 let year=d.getFullYear();

 return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={
      (typeof weather.main!="undefined")
      ? ((weather.weather[0].main==="Haze")
          ? 'app warm'
          :((weather.weather[0].main==="Clear")
             ? 'app'
             : ((weather.weather[0].main==="Clouds")
                ? 'app cloud' 
                : 'app cold')))
      :'app cold'}>
      <div className="main-box">
        <div className="search-box">
          <input
           type="text" className="search-bar" placeholder="Search"
           onChange={e=>setQuery(e.target.value)}
           value={query}
           onKeyPress={search}
           />
        </div>
     {(typeof weather.main!="undefined")?(
     <div>
      <div className="location-box">
        <div className="location">{weather.name},{weather.sys.country}</div>
        <div className="date">{dateReturn(new Date())}</div>
      </div>
     
      <div className="weather-box">
        <div className="temp">
          {Math.round(weather.main.temp)}°c
        </div>
        <div className="weather">{weather.weather[0].main}</div>
      </div>
      </div>
      ):('')}
      </div>
    </div>
    
  );
}

export default App;
