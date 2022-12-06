
<div align="center"> <img align="center" <a target="_blank" href="http://uniguide.unaux.com"><img src="https://user-images.githubusercontent.com/86853497/205068884-25ac9cbc-48d2-4c36-93e5-43536239f3f4.png"></a> </div>
<h1 align="center"> UniGuide <a href="http://uniguide.unaux.com" ></a></h1>
<p align="center">
  <a target="_blank" href="https://github.com/Hipo/university-domains-list"><img src="https://img.shields.io/badge/API-University%20Domains%20List-lightgrey"></a>
  <a target="_blank" href="https://openweathermap.org/api"><img src="https://img.shields.io/badge/API-OpenWeatherMap-orange?logo=java"></a>
  <a target="_blank" href="https://cloud.google.com/gcp"><img src="https://img.shields.io/badge/API-Google%20Cloud%20Platform-blue"></a> 
  <a target="_blank" href="https://ipregistry.co/docs/endpoints"><img src="https://img.shields.io/badge/API-ipregistry-blueviolet"></a>
  <a target="_blank" href="https://clearbit.com/logo"><img src="https://img.shields.io/badge/API-clearbit-9cf"></a>
</p>
<p align="center">
  <a target="_blank" href=""><img src="https://img.shields.io/badge/-AJAX-green"></a>
  <a target="_blank" href=""><img src="https://img.shields.io/badge/-HTML-blue"></a>
  <a target="_blank" href=""><img src="https://img.shields.io/badge/-CSS-red"></a>
  <a target="_blank" href=""><img src="https://img.shields.io/badge/-Javascript-yellow"></a>
  <a target="_blank" href=""><img src="https://img.shields.io/badge/-Bootstrap-blueviolet"></a>
  <a target="_blank" href=""><img src="https://img.shields.io/badge/-JSON-red"></a>
  <a target="_blank" href=""><img src="https://img.shields.io/badge/reop-Git-orange"></a> 
  <a target="_blank" href=""><img src="https://img.shields.io/badge/reop-GitHub-lightgrey"></a>

</p>

<p align="center">A World Wide Universities Search and Guide Platform.</p>

# Screenshots
 <img src="https://user-images.githubusercontent.com/86853497/205074681-22aea32b-13d9-4612-8b0a-a0aa729da056.png" width="400" height="220" />  <img src="https://user-images.githubusercontent.com/86853497/205074703-82e43202-fddb-4f9e-ad53-cfc1a3557ac7.png" width="400" height="220" /> <img src="https://user-images.githubusercontent.com/86853497/205074734-cfcc6cba-51b0-4ff6-91c8-3a85433a27e4.png" width="400" height="220" />      <img src="https://user-images.githubusercontent.com/86853497/205074778-3cc6322e-def3-4e6b-98e2-d92c4a512fa9.png" width="400" height="220" /> <img src="https://user-images.githubusercontent.com/86853497/205074749-cb09240b-f79a-42bf-820e-931cce73cfad.png" width="400" height="220" />      <img src="https://user-images.githubusercontent.com/86853497/205661956-a86a123a-4d5f-4657-a49f-25839ac0ad05.png" width="400" height="220" /> <img src="https://user-images.githubusercontent.com/86853497/205074646-e078de6f-7bbe-430e-bc05-bbe1c647d35a.png" width="400" height="220" />      <img src="https://user-images.githubusercontent.com/86853497/205074823-0983ac91-f5fe-4996-a53f-6dbdfcbdb11e.png" width="400" height="220" />
 
## Key modules:
*	Hipo University Domains and Names API
*	Whether API
*	Google Map and Geocoding API



## Usage
If you ever wanted to know the available university in a certain state, city, or even a country, our website will help you find all the basic information you need such as the name, location, website, logo, reviews and etc. for most of the universities of the world, with a friendly user experience and easy to use interface.


## How it works
on the first visit to the website takes the user's IP and searches for a default location to show all known universities at that specific location, then the user can use a keyword for search or another country name to show a new list of university cards.

card information is fetched from an API named University Domains and Names Data by Hipo, then further with the given detail using google API we fetch information search as an address, map location, and coordinates, then some information is passed the open weather API for more info about the expanded university card.

In this scenario more and more relevant information could be fetched to provide more useful information to the users

## TO-DO:
* Fix repeated results
* improve search (search for abbreviation e.g. IIUI)
* Implement mobile Domain (m.)
