const apiKey = 'c05098b0e566295258fabb83877cdf50';
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${apiKey}`

const form = document.querySelector('form');
const search = document.querySelector('#search');

const wheather = document.querySelector('#wheather')

const getWheather = async (city)=>{
    wheather.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(url);
    const data = await response.json(); 
      return showWheather(data);
}
const showWheather = (data)=>{
    if(data.cod == '404'){
        wheather.innerHTML = `<h2>City not found</h2>`
        return;
    };
wheather.innerHTML = ` <div>
<img src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png ">
</div>
<div>
<h2>${data.main.temp}°C</h2>
 <h4>${data.weather[0].main}</h4>
</div>`
}
form.addEventListener("submit", function(e){
    getWheather(search.value);
e.preventDefault()
})