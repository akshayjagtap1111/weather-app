function append_temp(data) {
    let temp = document.getElementById("temp");

    temp.innerHTML = null;

    let icon = document.createElement("img");
    icon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

    let temp_val = document.createElement("p");
    temp_val.innerText = `${data.list[0].main.temp}°C,`;

    let city_name = document.createElement("p");
    city_name.innerText = `${data.city.name}, ${data.city.country}`;

    temp.append(icon, temp_val, city_name);
  }

  