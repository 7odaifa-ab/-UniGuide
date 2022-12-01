window.addEventListener("DOMContentLoaded", () => {
  loadDataForFirstTime();

  //OnCLickListener for Search button
  document.querySelector("#search").onclick = () => {
    //Clearig all cards that exist from previous search
    document.getElementById("card-wrap").innerHTML = "";

    //remove loading button on new search
    removeLoadBtn();

    var name = document.querySelector("#form1").value;
    var location = document.querySelector("#form2").value;

    name.trim();
    location.trim();

    //This basic URL is provided by HippoUni API (university API). We will extend it depending upon user's search
    var url = "http://universities.hipolabs.com/search?name=";

    if (name != "" && location == "") {
      url = url + name;
      console.log("URL is Without country name  " + url);
    } else if (location != "" && name == "") {
      url = "http://universities.hipolabs.com/search?country=" + location;
      console.log("URL has just country name" + url);
    } else if (name != "" && location != "") {
      url = url + name + "&country=" + location;
      console.log("URL has Both things, name and location  " + url);
    } else {
      alert("Please Enter Any thing");
      console.log("Empty search ");
      return;
    }

    //Making name and location forms empty
    document.querySelector("#form1").value = "";
    document.querySelector("#form2").value = "";

    console.log("Call made to Fetch data ");
    fetchData(url);
  };

  //set search button as defualt button for form 1 & 2
  document.querySelector("#form1").addEventListener("keyup", (event) => {
    if (event.key !== "Enter") return;
    document.querySelector("#search").click();
    event.preventDefault();
  });
  document.querySelector("#form2").addEventListener("keyup", (event) => {
    if (event.key !== "Enter") return;
    document.querySelector("#search").click();
    event.preventDefault();
  });
});

function loadDataForFirstTime() {
  //It will display cards after getting current country of user by users IP address
  var API_Key = config.ipregistry;
  fetch("https://api.ipregistry.co/?key=" + API_Key)
    .then(function (response) {
      return response.json();
    })
    .then(function (payload) {
      var url =
        "http://universities.hipolabs.com/search?country=" +
        payload.location.country.name;

      var countryIcon = document.createElement("i");
      countryIcon.className = "icon fas fa-map-marker-alt";
      document.getElementById("default_location").appendChild(countryIcon);
      document
        .getElementById("default_location")
        .appendChild(document.createTextNode(payload.location.country.name));

      fetchData(url);
    });
}

async function fetchData(link) {
  const response = await fetch(link);
  const data = await response.json();
  try {
    var totalRecords = Object.keys(data).length;
    if (totalRecords == 0) {
      console.log("No Record Found ");
      alert("No Record Found");
      return;
    }
    console.log("Total Records found are  " + totalRecords);

    var cardObj = {
      data: data,
      index: 0,
      totalRecords: totalRecords,
    };

    // Load cards to the page after fetching data
    loadRecords(cardObj);

    // add load more records button if exceed 24 cards
    addLoadBtn(cardObj);

    //run card expend function on all loaded cards
    card_expend();
  } catch (e) {
    console.log("Exception occured while processing data of API. " + e);
  }
}

async function fetchLocation(name, country) {
  //It will return longitute, latitude & address (Promise)

  const API_Key = config.googleapis;
  var locationURL =
    "https://maps.googleapis.com/maps/api/geocode/json?address=";
  locationURL += name;
  locationURL += " " + country;
  locationURL += "&key=" + API_Key;

  const response = await fetch(locationURL);
  const data = await response.json();
  // console.log("This is the data recieved from location API ");
  // console.log(data);

  var address = data.results[0].formatted_address;
  const longitude = data.results[0].geometry.location.lng;
  const latitude = data.results[0].geometry.location.lat;

  console.log("The Formatted Address is " + address);
  return {
    longitude,
    latitude,
    address,
  };
}

function loadRecords(cardObj) {
  for (var i = 0; i < 24; i++, cardObj.index++) {
    //Only displaying 24 records maximum on every call
    if (cardObj.index == cardObj.totalRecords) {
      removeLoadBtn();
      break;
    } else {
      createCard(
        cardObj.data[cardObj.index].name,
        cardObj.data[cardObj.index].country,
        cardObj.data[cardObj.index].domains,
        cardObj.data[cardObj.index].web_pages,
        cardObj.data[cardObj.index]["state-province"]
      );
    }
  }
}

function addLoadBtn(cardObj) {
  if (cardObj.index == cardObj.totalRecords) {
    removeLoadBtn();
    return;
  } else {
    var loadBtn = document.createElement("button");
    loadBtn.setAttribute("id", "load-Btn");
    var loadIcon = document.createElement("i");
    loadIcon.className = "load-icon fas fa-chevron-down";
    document.getElementById("section2").appendChild(loadBtn);
    loadBtn.appendChild(document.createTextNode(""));
    loadBtn.appendChild(loadIcon);
    document.getElementById("load-Btn").addEventListener("click", function () {
      loadRecords(cardObj);
      card_expend();
    });
  }
}

function removeLoadBtn() {
  var loadBtn = document.getElementById("load-Btn");
  if (loadBtn != null) {
    loadBtn.remove();
  }
}

//cookie Consent message
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);
