function updateTime() {
  let LA = document.querySelector("#LA");

  if (LA) {
    let laDateElement = LA.querySelector(".date");
    let laTimeElement = LA.querySelector(".time");
    let laTime = moment().tz("America/Los_Angeles");

    laDateElement.innerHTML = laTime.format("MMMM Do YYYY");
    laTimeElement.innerHTML = laTime.format("h:mm:ss A");
  }
  let Paris = document.querySelector("#Paris");
  if (Paris) {
    let parisDateElement = Paris.querySelector(".date");
    let parisTimeElement = Paris.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss A");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1].split("-")[0];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");

  citiesElement.innerHTML = `<div class="city">
    <div>
    <h2>${cityName}<h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    <div class="time">${cityTime.format("h:mm:ss A")}</div>
    </div>
    </div>`;
}
updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector(".city-select");
citiesSelectElement.addEventListener("change", updateCity);
