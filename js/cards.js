//document.getElementById("test").addEventListener("click", createExpendedCard())

function createCard(name, country, domain, url, province) {
  var col = document.createElement("div");
  var card = document.createElement("div");
  var cardBody = document.createElement("div");
  var imgWrap = document.createElement("div");
  var logo = document.createElement("img");
  var textWrap = document.createElement("div");
  var uniName = document.createElement("h5");
  var uniCountry = document.createElement("h6");
  var uniDomain = document.createElement("h6");
  var uniProvince = document.createElement("h6");
  //var p = document.createElement("p");
  var cardLinkwrap = document.createElement("div");
  var uniWebsite = document.createElement("a");

  col.classList.add("col");
  card.className = "card uni-card card-text";
  cardBody.className = "fsm card-body uni-card-body";
  imgWrap.className = "img-wrap";
  logo.className = "logoStyle";
  textWrap.className = "card-text-wrap ";
  uniName.className = "fa card-title";
  uniCountry.className = "card-subtitle mb-2 card-light-text";
  uniDomain.className = "card-text";
  uniProvince.className = "card-text";
  cardLinkwrap.className = "card-link-wrap";
  uniWebsite.className = "card-link";

  //scrapping logo here.
  var logoUrl = "https://logo.clearbit.com/www." + domain;
  logo.src = logoUrl;
  logo.addEventListener("error", function () {
    // console.log(" Logo Not found (On Error Event occured) ");
    logo.src = "img/logo.png";
  });
  //set backgroung-logo as watermark
  // $cardActual.setAttribute("style", "background-image:url("+")");

  //start to assign Values
  uniName.appendChild(document.createTextNode(name));

  //Country Description
  var countryIcon = document.createElement("i");
  countryIcon.className = "icon fas fa-map-marker-alt";
  uniCountry.appendChild(countryIcon);
  uniCountry.appendChild(document.createTextNode(country));

  //Domain Description
  var domainIcon = document.createElement("i");
  domainIcon.className = "icon fab fa-creative-commons-pd";
  uniDomain.appendChild(domainIcon);
  let description = "Domain: " + domain;
  uniDomain.appendChild(document.createTextNode(description));

  //State-Province Description
  var provinceIcon = document.createElement("i");
  provinceIcon.className = "icon fas fa-map-marked-alt";
  uniProvince.appendChild(provinceIcon);

  description = "Province: ";
  if (province == null) {
    description += "N/A";
  } else {
    description += province;
  }
  uniProvince.appendChild(document.createTextNode(description));

  //university website
  var siteIcon = document.createElement("i");
  siteIcon.className = "icon fas fa-link";
  uniWebsite.appendChild(siteIcon);
  uniWebsite.appendChild(document.createTextNode("Visit Official Site"));
  //uniWebsite.setAttribute("href", url);
  uniWebsite.setAttribute("href", "http://" + domain);
  uniWebsite.setAttribute("target", "_blank");

  //a2.appendChild(document.createTextNode("Goto Top"));
  //a2.setAttribute("href", "#");

  //expand button
  var expandIcon = document.createElement("i");
  expandIcon.className = "expand-icon fas fa-expand-arrows-alt";

  col.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(imgWrap);
  imgWrap.appendChild(logo);
  cardBody.appendChild(textWrap);
  textWrap.appendChild(uniName);
  textWrap.appendChild(uniCountry);
  textWrap.appendChild(uniDomain);
  textWrap.appendChild(uniProvince);
  //cardBody.appendChild(cardLinkwrap);
  textWrap.appendChild(uniWebsite);
  cardBody.appendChild(expandIcon);

  document.getElementById("card-wrap").appendChild(col);
}

function card_expend() {
  // ***card expend function***
  //Setup
  var cardActual = document.createElement("div");
  cardActual.setAttribute("id", "fsm_actual");
  cardActual.style.overflow = "auto";
  document.body.appendChild(cardActual);
  var $fsm = document.querySelectorAll(".fsm");
  var $cardActual = document.querySelector("#fsm_actual");
  $cardActual.style.position = "fixed";

  var position = {};
  var size = {};

  //modal action stuffs
  var openFSM = function (event) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    var $this = event.currentTarget;
    $this = $this.parentNode;
    position = $this.getBoundingClientRect();
    size = {
      width: window.getComputedStyle($this).width,
      height: window.getComputedStyle($this).height,
    };

    $cardActual.style.overflow = "auto";
    $cardActual.style.position = "fixed";
    $cardActual.style.top = position.top + "px";
    $cardActual.style.left = position.left + "px";
    $cardActual.style.height = size.height;
    $cardActual.style.width = size.width;
    $cardActual.style.margin = $this.style.margin;

    setTimeout(function () {
      $cardActual.innerHTML = $this.innerHTML;
      var classes = $this.classList.value.split(" ");
      for (var i = 0; i < classes.length; i++) {
        $cardActual.classList.add(classes[i]);
      }
      $cardActual.classList.add("growing");
      $cardActual.style.height = "100vh";
      $cardActual.style.width = "100vw";
      $cardActual.style.top = "0";
      $cardActual.style.left = "0";
      $cardActual.style.margin = "0";
    }, 1);

    setTimeout(function () {
      $cardActual.classList.remove("growing");
      $cardActual.classList.add("full-screen");
      //==========================================================
      createExpendedCard();
      var shrinkBtn = document.createElement("button");
      shrinkBtn.className = "shrink-Btn";
      var shrinkIcon = document.createElement("i");
      shrinkIcon.className = "shrink-icon fas fa-chevron-down";
      $cardActual.appendChild(shrinkBtn);
      shrinkBtn.appendChild(shrinkIcon);
      $cardActual
        .getElementsByClassName("shrink-Btn")[0]
        .addEventListener("click", closeFSM);
      //==========================================================
    }, 1000);
  };

  var closeFSM = function (event) {
    var $this = event.currentTarget;
    $this = $this.parentNode;
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    $cardActual.style.overflow = "hidden";
    $this.style.height = size.height;
    $this.style.width = size.width;
    $this.style.top = position.top + "px";
    $this.style.left = position.left + "px";
    $this.style.margin = "0";
    $this.classList.remove("full-screen");
    $this.classList.add("shrinking");

    setTimeout(function () {
      while ($this.firstChild) $this.removeChild($this.firstChild);
      var classList = $this.classList;
      while (classList.length > 0) {
        classList.remove(classList.item(0));
      }
      $this.style = "";
    }, 1000); //timeout for card closing
  };

  //fsm.length shows total no. of cards present
  for (var i = 0; i < $fsm.length; i++) {
    $fsm[i]
      .getElementsByClassName("expand-icon")[0]
      .addEventListener("click", openFSM);
    //$fsm[i].addEventListener("click", openFSM);
  }
  //$cardActual.addEventListener("click", closeFSM);
}

// ******************* add elemants after expnding the card *******************
function createExpendedCard() {
  //Setup
  var $cardActual = document.querySelector("#fsm_actual");
  var uniName = $cardActual.getElementsByClassName("card-title")[0].textContent;
  var uniCountry =
    $cardActual.getElementsByClassName("card-subtitle")[0].childNodes[1]
      .textContent;

  //address
  var addressText = document.createElement("div");
  var addressHeading = document.createElement("h5");
  var addressPara = document.createElement("p");
  addressText.className = "address";

  //widget
  var widget = document.createElement("div");
  var widgetHead = document.createElement("h1");
  var weatherWrap = document.createElement("div");
  var weather = document.createElement("div");
  widget.className = "widget";
  weatherWrap.className = "weather";
  weather.id = "openweathermap-widget-15";

  //map
  var mapWrap = document.createElement("div");
  var map = document.createElement("iframe");
  mapWrap.className = "map-wrap";
  map.className = "google-map";
  map.setAttribute("width", "100%");
  map.setAttribute("height", "450");
  map.setAttribute("style", "border:0");
  map.setAttribute("loading", "lazy");
  map.setAttribute("allowfullscreen", "");

  var fsm_actual = document.getElementById("fsm_actual");
  fsm_actual.appendChild(widget);
  widget.appendChild(weatherWrap);
  weatherWrap.appendChild(weather);

  const weather_API_key = config.openweathermap;
  var UniAddress, Unilatitude, Unilongitude;
  var mapUrl;

  fetchLocation(uniName, uniCountry)
    .then((response) => {
      // console.log("Executing first then  after returning from fetchLocation");
      mapUrl =
        "https://www.google.com/maps/embed/v1/place?key=" +
        config.googleapis +
        "&q=" +
        response.latitude +
        "," +
        response.longitude;
      map.setAttribute("src", mapUrl);

      //saved for accesing them in next .then
      UniAddress = response.address;
      Unilatitude = response.latitude;
      Unilongitude = response.longitude;
    })
    .then(() => {
      fsm_actual.appendChild(addressText);
      addressText.appendChild(addressHeading);
      addressHeading.appendChild(document.createTextNode("Address"));
      addressText.appendChild(addressPara);
      console.log("response.saddress is " + UniAddress);
      addressPara.appendChild(document.createTextNode(UniAddress));

      fsm_actual.appendChild(mapWrap);
      mapWrap.appendChild(map);

      getCityID(Unilatitude, Unilongitude, weather_API_key)
        .then((result) => {
          wetaher(result);
        })
        .catch((error) => {
          console.log("Exception returned while getting the city id" + error);
        });
    })
    .catch((error) =>
      console.log(
        "Exception returned when the call was made to fetchLocation ans is" +
          error
      )
    );
}

function wetaher(ID) {
  window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
  window.myWidgetParam.push({
    id: 15,
    cityid: ID,
    appid: config.openweathermap,
    units: "metric",
    containerid: "openweathermap-widget-15",
  });
  (function () {
    var script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src =
      "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script, s);
  })();
}
async function getCityID(latitude, longitude, key) {
  let url =
    "https://pro.openweathermap.org/data/2.5/forecast/climate?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    key;

  const response = await fetch(url);
  const data = await response.json();
  return data.city.id;
}
