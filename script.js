function updateTime() {
  const laElement = document.querySelector("#LA");
  if (laElement) {
    const laDate = laElement.querySelector(".date");
    const laTime = laElement.querySelector(".time");
    const time = moment().tz("America/Los_Angeles");
    laDate.innerHTML = time.format("MMMM Do YYYY");
    laTime.innerHTML = time.format("h:mm:ss A");
  }

  const parisElement = document.querySelector("#Paris");
  if (parisElement) {
    const parisDate = parisElement.querySelector(".date");
    const parisTime = parisElement.querySelector(".time");
    const time = moment().tz("Europe/Paris");
    parisDate.innerHTML = time.format("MMMM Do YYYY");
    parisTime.innerHTML = time.format("h:mm:ss A");
  }
}

function updateCity(event) {
  const cityTimeZone = event.target.value;
  const cityName = cityTimeZone.split("/")[1].replace("_", " ");
  const cityTime = moment().tz(cityTimeZone);

  const citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        <div class="time">${cityTime.format("h:mm:ss A")}</div>
      </div>
    </div>`;
}

updateTime();
setInterval(updateTime, 1000);

const citySelect = document.querySelector(".city-select");
citySelect.addEventListener("change", updateCity);
