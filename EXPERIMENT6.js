document.getElementById("get-weather").addEventListener("click", async () => {
    let city = document.getElementById("city").value;

    if (city === "") {
        document.getElementById("result").innerText = "Please Enter city";
        return;
    }

    localStorage.setItem("lastCity", city);

    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR-API-KEY&units=metric`);
        
        let data = await res.json();

        if (data.cod === "404") { 
            document.getElementById("result").innerText = "City not found";
        } else {
            document.getElementById("result").innerText = `Temperature: ${data.main.temp}°C. Condition: ${data.weather[0].description}`;
        }
    } catch (e) {
        document.getElementById("result").innerText = "Error fetching data.";
    }
});

window.onload = () => {
    let lastCity = localStorage.getItem("lastCity");

    if (lastCity) {
        document.getElementById("city").value = lastCity;
    }
};