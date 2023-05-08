setInterval(function () {
  // Rio de Janeiro
  let rioDeJaneiro = document.getElementById("rio-de-janeiro");
  let rioDeJaneiroTime = moment().tz(`America/Sao_Paulo`);
  rioDeJaneiro.querySelector(".date").innerHTML =
    rioDeJaneiroTime.format(`MMMM Do YYYY`);
  rioDeJaneiro.querySelector(".time").innerHTML = rioDeJaneiroTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  // Porto
  let porto = document.getElementById("porto");
  let portoTime = moment().tz(`Europe/Lisbon`);
  porto.querySelector(".date").innerHTML = portoTime.format(`MMMM Do YYYY`);
  porto.querySelector(".time").innerHTML = portoTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  // tokyo
  let tokyo = document.getElementById("tokyo");
  let tokyoTime = moment().tz(`Asia/Tokyo`);
  tokyo.querySelector(".date").innerHTML = tokyoTime.format(`MMMM Do YYYY`);
  tokyo.querySelector(".time").innerHTML = tokyoTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  //sydney
  let sydney = document.getElementById("sydney");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydney.querySelector(".date").innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydney.querySelector(".time").innerHTML = sydneyTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

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
    citiesElement.innerHTML = "";
    location.reload();
  }
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
