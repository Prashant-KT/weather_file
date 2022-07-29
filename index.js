let main_div = document.getElementById("nextweek");
async function getdetalis() {
  main_div.innerHTML = "";
  let map = document.getElementById("map");
  map.style.height = "215px";
  let city = document.getElementById("city").value || "Mumbai";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=6&appid=5b2fe86acda81f8761fcf8f70357d4ee&units=metric`;
  let res = await fetch(url);
  let data = await res.json();
  let flexData = data.list;
  flexData.forEach((el) => {
    appendData3(el);
  });
  console.log(flexData);
  getGoogleMap(city);
  appendData(data);
  appendData2(data);
  console.log(data);
}
getdetalis();
function getGoogleMap(city) {
  let getMapData = document.getElementById("googleMap");
  getMapData.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=AIzaSyAWrXe9tnjD0YutIzBzCoyfwO7tRb2s8Lg=&output=embed`;
  getMapData.width = "100%";
  getMapData.height = "100%";
}

function appendData(data) {
  let maind = document.getElementById("maind");
  maind.innerHTML = "";
  maind.style.padding = "10px";
  let city_name = document.createElement("h1");
  city_name.innerText = data.city.name;
  let date = document.createElement("p");
  // date.innerHTML = data.list[0].dt_txt;
  let d = new Date();
  date.innerHTML = d.toDateString();
  let temp = document.createElement("h2");
  temp.innerHTML = `${data.list[0].main.temp}°C`;
  maind.append(city_name, date, temp);
}

function appendData2(data) {
  let smalld = document.getElementById("smalld");
  smalld.innerHTML = "";
  smalld.style.padding = "10px";
  let speed = document.createElement("h3");
  speed.innerHTML = `Airspeed: ${data.list[0].wind.speed} km/hr`;
  let Dis = document.createElement("h2");
  Dis.style.color = "maroon";
  Dis.innerHTML = `${data.list[0].weather[0].description}`;
  let img = document.createElement("img");
  img.style.width = "60%";
  img.style.height = "80%";
  img.style.borderRadius = "70%";
  img.style.background = "rgb(243,162,174)";
  img.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  smalld.append(img, Dis, speed);
}

function appendData3(el) {
  let small_div = document.createElement("div");
  let h3_date = document.createElement("h4");
  h3_date.innerHTML = el.dt_txt;

  let p_dis = document.createElement("p");
  p_dis.innerHTML = el.weather[0].description;

  let p_temp = document.createElement("h2");
  p_temp.innerHTML = `${el.main.temp}°C`;

  let img = document.createElement("img");
  img.src = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;

  small_div.append(img, h3_date, p_dis, p_temp);
  main_div.append(small_div);
}
