function updateTime() {
  // Rio de Janeiro
  let rioDeJaneiroElement = document.querySelector("#rio-de-janeiro");
  if (rioDeJaneiroElement) {
    let rioDeJaneiroDateElement = rioDeJaneiroElement.querySelector(".date");
    let rioDeJaneiroTimeElement = rioDeJaneiroElement.querySelector(".time");
    let rioDeJaneiroTime = moment().tz(`America/Sao_Paulo`);

    rioDeJaneiroDateElement.innerHTML = rioDeJaneiroTime.format(`MMMM Do YYYY`);
    rioDeJaneiroTimeElement.innerHTML = rioDeJaneiroTime.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }
  // Porto
  let portoElement = document.querySelector("#porto");
  if (portoElement) {
    let portoDateElement = portoElement.querySelector(".date");
    let portoTimeElement = portoElement.querySelector(".time");
    let portoTime = moment().tz(`Europe/Lisbon`);

    portoDateElement.innerHTML = portoTime.format(`MMMM Do YYYY`);
    portoTimeElement.innerHTML = portoTime.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citySelectName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="cities">
          <div>
            <h2>${citySelectName}</h2>
            <div class="date">${cityTime.format(`MMMM Do YYYY`)}</div>
          </div>
          <div class="time">${cityTime.format(`h:mm`)} <small>${cityTime.format(
    "A"
  )}</small>
          </div>
    </div>`;

  if (cityTimeZone === "replace") {
    location.reload();
  }
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

//let replaceSelectCity = document.getElementById("replace");
//replaceSelectCity.addEventListener("change", () => {
// Refresh the page on change event
//location.reload();});
