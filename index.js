const website = document.getElementById("website");
let url ="http://api.weatherapi.com/v1/current.json?key=6b43a5d97b1b489b37230458211511&q=London&aqi=no";

fetch(url)
.then((response)=> response.json())
.then((data) => (weather.textContent = data.current.temp_c));

function clicked(){
    alert("You clicked me");
}