var API = "https://restcountries.com/v3.1/all";

var fet = fetch(API) .then((response) => response.json())  .then((data) => {
    
    data.map((value) => {
      var spreadOperator = { ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
        latitude: value.latlng[0],
        longitude: value.latlng[1]
      };
      createcountry(spreadOperator);        
        
    })
  }).catch((error)=>console.log(error));
    
   
function createcountry({ name, flag, code, capital, region, latitude,longitude }) {
   
  document.body.innerHTML += 
  ` <div class="container">
    <div class="card" >
    <h1 id="title" class="text-center">${name}</h1>
    <img src="${flag}" class="flag" alt="${name}'Flag image"> 
    <div class="card-body car" >
    <p><span>Captial :</span> ${capital}</p>
  <p><span>Region :</span> ${region}</p>
  <p><span>Latitude :</span> ${latitude}</p>
  <p><span>Longitude :</span> ${longitude}</p>
  <p><span>Country Code :</span>${code}</p>
  <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click for Weather</a>
 <div id=${name}>   </div> 
 </div>
</div>
</div>`
}

function block(lat,lng,name){

  var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=20bf4bd158e253e914576847478e37ed`
   
console.log(name)
fetch(WAPI) .then((response) => response.json()) .then((data)=> {

     alert(`Weather
     ${name.id} weather condition  
     Humidity : ${data.main.humidity}
     Current Pressure: ${data.main.pressure}
     Wind Speed :${data.wind.speed}
     Temperature : ${data.main.temp}
     `)
    })
}  
document.addEventListener("click",(event) => event.preventDefault())