	var map;
  	var geoJSON;
  	var request;
 	var gettingData = false;
  	var openWeatherMapKey = "ed3e7dbe9c95a32328d286a0af218f56"

  function createMap() {
    var parameters = {
      zoom: 9.1,
      center: {lat:59.93863, lng: 30.31413},
    };


// marker on the map
 map = new google.maps.Map(document.getElementById('map-canvas'), parameters);
    var marker = new google.maps.Marker({
        	position: {lat: 60.06, lng: 30.55},
        	map: map,
        	icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        })
      var infoWindow = new google.maps.InfoWindow({
        content:'<h3>Welcome to <br> Saint Petersburg, Russia!</h3><h2>Nice place to land here :)</h2>'
      });

        marker.addListener('click', function(){
		infoWindow.open(map, marker);
      });

    google.maps.event.addListener(map, 'idle', checkIfDataRequested);

    map.data.addListener('click', function(event) 
    { infowindow.open(map);
	});
  }

  var checkIfDataRequested = function() {
  				 // (not to send extra requests)
    while (gettingData === true) {
      request.abort();
      gettingData = false;
    }
    getCoordinates();
  };

  var getCoordinates = function() {
    var bounds = map.getBounds();
    getWeather(bounds.getNorthEast().lat(), bounds.getNorthEast().lng(), bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
  };

  var getWeather = function(northLat, eastLng, southLat, westLng) {
    gettingData = true;
    var requestString = "http://api.openweathermap.org/data/2.5/box/city?bbox=" + westLng + "," + northLat + "," + eastLng + "," + southLat + "," + map.getZoom() 
    + "&cluster=yes&format=json" + "&APPID=" + openWeatherMapKey;
    request = new XMLHttpRequest();
    request.onload = proccessResults;
    request.open("get", requestString, true);
    request.send();
  };

  var proccessResults = function() {
    var results = JSON.parse(this.responseText);
    if (results.list.length > 0) {
        resetData();
        for (var i = 0; i < results.list.length; i++) {
          geoJSON.features.push(jsonToGeoJson(results.list[i]));
        }
        drawIcons(geoJSON);
    }
  };
	var infowindow = new google.maps.InfoWindow();

  //convert results to geoJSON
  var jsonToGeoJson = function (weatherItem) {
    var feature = {
      type: "Feature",
      properties: {
        weather: weatherItem.weather[0].main,
        icon: "http://openweathermap.org/img/w/"
              + weatherItem.weather[0].icon  + ".png",
        coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat]
      },
      geometry: {
        type: "Point",
        coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat]
      }
    };

    map.data.setStyle(function(feature) {
      return {
        icon: {
          url: feature.getProperty('icon'),
          anchor: new google.maps.Point(25, 25)
        }
      };
    });
    return feature;
  };

  var drawIcons = function (weather) {
     map.data.addGeoJson(geoJSON);
     gettingData = false;
  };

  var resetData = function () {
    geoJSON = {
      type: "FeatureCollection",
      features: []
    };
    map.data.forEach(function(feature) {
      map.data.remove(feature);
    });
  };
  
  google.maps.event.addDomListener(window, 'load', createMap);
