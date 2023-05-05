function updateTime() {
  // Rio de Janeiro
  let rioDeJaneiroElement = document.querySelector("#rio-de-janeiro");
  let rioDeJaneiroDateElement = rioDeJaneiroElement.querySelector(".date");
  let rioDeJaneiroTimeElement = rioDeJaneiroElement.querySelector(".time");
  let rioDeJaneiroTime = moment().tz(`America/Sao_Paulo`);

  rioDeJaneiroDateElement.innerHTML = rioDeJaneiroTime.format(`MMMM Do YYYY`);
  rioDeJaneiroTimeElement.innerHTML = rioDeJaneiroTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  // Porto
  let portoElement = document.querySelector("#porto");
  let portoDateElement = portoElement.querySelector(".date");
  let portoTimeElement = portoElement.querySelector(".time");
  let portoTime = moment().tz(`Europe/Lisbon`);

  portoDateElement.innerHTML = portoTime.format(`MMMM Do YYYY`);
  portoTimeElement.innerHTML = portoTime.format(`h:mm:ss [<small>]A[</small>]`);
}

updateTime();
setInterval(updateTime, 1000);
