const apiKey="ceb0a654175f69e70ed0d1ac7d9eb5e9";
const apiURl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=israel";

async function checkWeather(){
    const response=await fetch(apiURl,'appid=${apiKey}');
    var data=await response.json();
    console.log(data);
}

checkWeather();