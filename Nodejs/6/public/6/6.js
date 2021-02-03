let country_info;
function loadDoc(url, cFunction) {
  let xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this.responseText);
    }
  };
  xhttp.open("GET", url, false);
  xhttp.send();
}
loadDoc("https://restcountries.eu/rest/v2", function (msg) {
  country_info = JSON.parse(msg);
});

let country_Names = [];
for (let name of country_info) {
  country_Names.push(name.name);
}

// ! select box
$(document).ready(function () {
  for (let i in country_Names) {
    $(".selectbox").append($("<option/>").html(country_Names[i]));
    $(".selectbox").css({
      width: "70%",
      height: "28px",
      "margin-bottom": "12px",
    });
  }
  // ! info boxs
  $(".selectbox").change(function () {
    let countrySelected = $(".selectbox option:selected").text();
    let PosInArr = country_Names.indexOf(countrySelected);
    $("#title").text(`${country_Names[PosInArr]}`);
    $("#NativeName").html(`<span class="span">Native Name</span>: ${country_info[PosInArr].nativeName}`);
    $("#Capital").html(`<span class="span">Capital</span>: ${country_info[PosInArr].capital}`);
    $("#Region").html(`<span class="span">Region</span>: ${country_info[PosInArr].region}`);
    $("#Population").html(`<span class="span">Population</span>: ${country_info[PosInArr].population}`);
    $("#Languages").html(
      `<span class="span">Languages</span>: ${country_info[PosInArr].languages[0].name}, ${country_info[PosInArr].languages[0].nativeName}`
    );
    $("#TimeZone").html(`<span class="span">TimeZone</span>: ${country_info[PosInArr].timezones}`);
    $("#code").text(`${country_info[PosInArr].callingCodes}`);
    $("img").attr("src", country_info[PosInArr].flag);
    let Weather;
    loadDoc(
      `http://api.openweathermap.org/data/2.5/weather?q=${country_info[PosInArr].capital},${country_info[PosInArr].alpha2Code}&appid=0301c2968175729a6992612b7c9f1818`,
      function (msg) {
        Weather = JSON.parse(msg);
      }
    );
    let city = country_info[PosInArr].capital
  

    $("#WindSpeed").text(`WindSpeed: ${Weather.wind.speed}MS`);
    $("#Temperature").text(`Temperature: ${Weather.main.temp}F`);
    $("#Humidity").text(`Humidity: ${Weather.main.humidity}%`);
    $("#Visibility").text(`Visibility: ${Weather.visibility}m`);
    $("#img").css({ display: "block" });
    $("#img").attr(
      "src",
      "http://openweathermap.org/img/wn/" + Weather.weather[0].icon + "@2x.png"
    );

    let url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=99a5b1388f2cca0457934907fde6ce76";

    let defualtLatLong = [Weather.coord.lon, Weather.coord.lat];

    mapboxgl.accessToken =
      "pk.eyJ1IjoibWVyYTF0IiwiYSI6ImNranJvZDZjNjdyZ24ycmxnb3ZsMzVsODQifQ.T58gItpkOyAeA_S0CXil5Q";
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: defualtLatLong,
      zoom: 2,
    });
    var el = document.createElement("div");
    el.className = "marker";
    new mapboxgl.Marker(el).setLngLat(defualtLatLong).addTo(map);
  });
});