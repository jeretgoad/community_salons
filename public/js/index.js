 // I had gotten rid of all the style controller and some them into one controller called shopController.

// I have added a shopType model to get the appropriate shops to filter

// I had also altered the html files in header and home page to make use of the new shopController. Routing was the main changes

// added a script in index.html that bootsraps google API with a specific key that I had already generated

// In the putnam_county_BBNSS JSON file i had added 2 new properties: duration & distance

// added those properties to the salon.server.model.js in the back-end

// added a getDistance function to somehow change the distace and duration attributes in the json files for the shops
( function()
{
    angular.module("community-salons",['ngRoute']);
    
    var shopType = function()
    {
      return {type: "home"}  
    };
    
    var usModel = function($http)
    {
      var workersArray = function()
      {
          return $http.get("/workers"); 
      }
      
      var addWorker = function(worker)
      {
          return $http.post("workers/", worker);
      }
      
      return {
          allWorkers:workersArray,
          addThisWroker:addWorker
      }
    };
    
    var putnam_county_adv = function($http)
    {
        var adverArray = function()
        {
            return $http.get("../JSON/putnam_county_advertisement.json");
        }
      
        var addAnAd = function(company)
        {
            return $http.post("ads/", company);
        }
      
        return {
            allAds:adverArray,
            addThisAd:addAnAd
        } 
    };
    
    var putnam_county_BBNSS = function($http)
    {
        var salonArray = function()
        {
            return $http.get("../JSON/putnam_county_BBNSS.json"); 
        }
      
        var addSalon = function(salon)
        {
            return $http.post("salons/", salon);
        }
      
        return {
            allSalons:salonArray,
            addThisSalon:addSalon
        } 
    };
    
    var indexModel = function()
    {
        return {
            prevIndex: 0,
            currIndex: 1,
            nextIndex: 2
        }
    }
    
    var homeController = function($scope, shopType, putnam_county_adv,  putnam_county_BBNSS, indexModel, $location)
    {
        $scope.advertisements = [];
        $scope.nearBarbers = [];
        $scope.nearBeauties = [];
        $scope.nearNails = [];
        $scope.nearSpas = [];
        $scope.nearStyles = [];
        var AllTheSalons = [];
        $scope.alterType = function(typeShop)
        {
            if(typeShop === "home")
                {
                    shopType.type = typeShop;
                    $location.path("/");
                }
            else if(typeShop === "us")
                {
                    shopType.type = typeShop;
                    $location.path("/us");
                }
            else
                {
                shopType.type = typeShop;
                $scope.salons = shops_filter(typeShop, AllTheSalons);
                $location.path("/shops");
                }
        }
        $scope.isActive = function(type)
        {
            if(type === shopType.type)
                {
                    return true;
                }
            else{
                return false;
            }
        }
        putnam_county_adv.allAds()
            .then(function(data) {
            $scope.advertisements = data.data;
            var lastIndex = $scope.advertisements.length -1;
            $scope.prev = $scope.advertisements[indexModel.prevIndex];
            $scope.curr = $scope.advertisements[indexModel.currIndex];
            $scope.next = $scope.advertisements[indexModel.nextIndex];
            console.log($scope.prev.img);
            $scope.nextAd = function()
            {
                var next = $scope.next.index;
                $scope.prev = $scope.curr;
                $scope.curr = $scope.next;
                if(next === lastIndex)
                    {
                        $scope.next = $scope.advertisements[0];
                    }
                else
                {
                    $scope.next = $scope.advertisements[next + 1];
                }
                indexModel.prevIndex = $scope.prev.index;
                indexModel.currIndex = $scope.curr.index;
                indexModel.nextIndex = $scope.next.index;
            }

            $scope.prevAd = function()
            {
                var prev = $scope.prev.index;
                $scope.next = $scope.curr;
                $scope.curr = $scope.prev;
                if(prev === 0)
                    {
                        $scope.prev = $scope.advertisements[lastIndex];
                    }
                else
                {
                    $scope.prev = $scope.advertisements[prev - 1];
                }
                indexModel.prevIndex = $scope.prev.index;
                indexModel.currIndex = $scope.curr.index;
                indexModel.nextIndex = $scope.next.index;
            }
        });
        
        putnam_county_BBNSS.allSalons()
            .then(function(data) {
            $scope.AllTheSalons = data.data;
            getLocation($scope, $scope.AllTheSalons);
            console.log("test: " + $scope.AllTheSalons[0].distance);
            $scope.nearBarbers = shops_filter("barber", $scope.AllTheSalons);
            $scope.nearBeauties = shops_filter("beauty", $scope.AllTheSalons);
            $scope.nearNails = shops_filter("nail", $scope.AllTheSalons);
            $scope.nearSpas = shops_filter("spa", $scope.AllTheSalons);
            $scope.nearStyles = shops_filter("style", $scope.AllTheSalons);
        });
        
        
    }
    var shopController = function($scope, shopType, putnam_county_adv, putnam_county_BBNSS, indexModel, $location)
    {
        $scope.advertisements = [];
        $scope.alterType = function(typeShop)
        {
            if(typeShop === "home")
                {
                    shopType.type = typeShop;
                    $location.path("/");
                }
            else if(typeShop === "us")
                {
                    shopType.type = typeShop;
                    $location.path("/us");
                }
            else
                {
                shopType.type = typeShop;
                $scope.salons = shops_filter(typeShop, AllTheSalons);
                $location.path("/shops");
                }
        }
        $scope.isActive = function(type)
        {
            if(type === shopType.type)
                {
                    return true;
                }
            else{
                return false;
            }
        }
        putnam_county_adv.allAds()
            .then(function(data) {
            $scope.advertisements = data.data;
            var lastIndex = $scope.advertisements.length -1;
            $scope.prev = $scope.advertisements[indexModel.prevIndex];
            $scope.curr = $scope.advertisements[indexModel.currIndex];
            $scope.next = $scope.advertisements[indexModel.nextIndex];
            $scope.nextAd = function()
            {
                var next = $scope.next.index;
                $scope.prev = $scope.curr;
                $scope.curr = $scope.next;
                if(next === lastIndex)
                    {
                        $scope.next = $scope.advertisements[0];
                    }
                else
                {
                    $scope.next = $scope.advertisements[next + 1];
                }
                indexModel.prevIndex = $scope.prev.index;
                indexModel.currIndex = $scope.curr.index;
                indexModel.nextIndex = $scope.next.index;
            }

            $scope.prevAd = function()
            {
                var prev = $scope.prev.index;
                $scope.next = $scope.curr;
                $scope.curr = $scope.prev;
                if(prev === 0)
                    {
                        $scope.prev = $scope.advertisements[lastIndex];
                    }
                else
                {
                    $scope.prev = $scope.advertisements[prev - 1];
                }
                indexModel.prevIndex = $scope.prev.index;
                indexModel.currIndex = $scope.curr.index;
                indexModel.nextIndex = $scope.next.index;
            }
        });
        putnam_county_BBNSS.allSalons()
            .then(function(data) {
            AllTheSalons = data.data;
            console.log(shopType.type);
            $scope.salons = shops_filter(shopType.type, AllTheSalons);
            $scope.prevIndex = function(salon)
            {
                salon.index--;
            }
        
            $scope.nextIndex = function(salon)
            {
                salon.index++;
            }
        });
        
    }
    
    var usController = function($scope, shopType, putnam_county_adv,  usModelD, indexModel, $location)
    {
        $scope.advertisements = [];
        $scope.workers = [];
        $scope.alterType = function(typeShop)
        {
            if(typeShop === "home")
                {
                    shopType.type = typeShop;
                    $location.path("/");
                }
            else if(typeShop === "us")
                {
                    shopType.type = typeShop;
                    $location.path("/us");
                }
            else
                {
                shopType.type = typeShop;
                $scope.salons = shops_filter(typeShop, AllTheSalons);
                $location.path("/shops");
                }
        }
        $scope.isActive = function(type)
        {
            if(type === shopType.type)
                {
                    return true;
                }
            else{
                return false;
            }
        }
        putnam_county_adv.allAds()
            .then(function(data) {
            $scope.advertisements = data.data;
            var lastIndex = $scope.advertisements.length -1;
            $scope.prev = $scope.advertisements[indexModel.prevIndex];
            $scope.curr = $scope.advertisements[indexModel.currIndex];
            $scope.next = $scope.advertisements[indexModel.nextIndex];
            $scope.nextAd = function()
            {
                var next = $scope.next.index;
                $scope.prev = $scope.curr;
                $scope.curr = $scope.next;
                if(next === lastIndex)
                    {
                        $scope.next = $scope.advertisements[0];
                    }
                else
                {
                    $scope.next = $scope.advertisements[next + 1];
                }
                indexModel.prevIndex = $scope.prev.index;
                indexModel.currIndex = $scope.curr.index;
                indexModel.nextIndex = $scope.next.index;
            }

            $scope.prevAd = function()
            {
                var prev = $scope.prev.index;
                $scope.next = $scope.curr;
                $scope.curr = $scope.prev;
                if(prev === 0)
                    {
                        $scope.prev = $scope.advertisements[lastIndex];
                    }
                else
                {
                    $scope.prev = $scope.advertisements[prev - 1];
                }
                indexModel.prevIndex = $scope.prev.index;
                indexModel.currIndex = $scope.curr.index;
                indexModel.nextIndex = $scope.next.index;
            }
        });
        
        var temp = [];
        usModelD.allWorkers()
            .then(function(data) {
            temp = data.data;
            $scope.workers = workersFilter(temp);
        });
    }
    
    var mapController = function($scope)
    {
        
    }
    
    //filters out the specific shops for that controller
    var shops_filter = function(type, salonArray)
    {
        var salons = [];
        for(var i = 0; i < salonArray.length; i++)
            {
                if(salonArray[i].types.includes(type))
                    {
                        salons.push(salonArray[i]);
                    }
            }
        return salons;
    };
    
    // filters the workers out in order
    var workersFilter = function(workersArray)
    {
        var filteredWorkers = workersArray;
        for(var i = 0; i < workersArray.length; i++)
            {
                if(workersArray[i].name === "Steven Trojcak")
                    {
                        var temp = filteredWorkers[0];
                        filteredWorkers[0] = workersArray[i];
                        filteredWorkers[i] = temp;
                    }
                if(workersArray[i].name === "Jeret Goad")
                    {
                        var temp = filteredWorkers[1];
                        filteredWorkers[1] = workersArray[i];
                        filteredWorkers[i] = temp;
                    }
            }
        return filteredWorkers;
    };
    
    //set index to 0 for gallery show
    var setGalleryIndex = function(shops)
    {
        for(var i = 0; i < shops.length; i++)
            {
                shops[i].index = 0;
            }
    };
    
    
    //get user geolocation and return it
	var getLocation = function($scope, allSalons) {
    	var latitude, longitude = 0;
		if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
				latitude = position.coords.latitude;
				longitude = position.coords.longitude;
                getDistance(latitude, longitude, allSalons);
			});
		} else {
			getError(err);
		}
	};
    
	var getDistance = function(lat, long, allSalons)
    {
        var origin = {lat:0, lng:0};
        origin.lat = lat;
        origin.lng = long;
        console.log(origin.lat + ", " + origin.lng);
        var allCoords = [];
        for(var i = 0; i < allSalons.length; i++)
            {
                var coords = {lat: 0, lng: 0};
                coords.lat = allSalons[i].latitude;
                coords.lng = allSalons[i].longitude;
                allCoords.push(coords);
            }
        var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
          origins: [origin],
          destinations: allCoords,
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          if (status !== 'OK') {
            alert('Error was: ' + status);
          } else {
            var originList = response.originAddresses;
            var destinationList = response.destinationAddresses;
            console.log("dest. size: " + destinationList.length);
            for (var i = 0; i < originList.length; i++) {
              var results = response.rows[i].elements;
              for (var j = 0; j < results.length; j++) {
                console.log(j + ": " + originList[i] + ' to ' + destinationList[j] +
                    ': ' + results[j].distance.text + ' in ' +
                    results[j].duration.text);
                allSalons[j].distance = results[j].distance.text;
                allSalons[j].duration = results[j].duration.text;
                console.log(allSalons[j].distance);
              }
            }
          }
        });
        return
    }
    
    var routingConfig = function($routeProvider, $locationProvider)
    {
        $routeProvider
        .when("/",
              {
                templateUrl:"../views/home.html",
                controller: "homeController"
            })
        .when("/shops",
              {
                templateUrl:"../views/shops.html",
                controller: "shopController"
            })
        .when("/us",
              {
                templateUrl:"../views/us.html",
                controller:"usController"
            
        })
        .when("/map",
              {
                templateUrl:"../views/map.html",
                controller:"mapController"  
            
        })
        .otherwise({redirectTo:"../views/home.html"});
      $locationProvider.html5Mode(true);
    };
    
    angular
    .module("community-salons")
    .controller("homeController", homeController)
    .controller("shopController", shopController)
    .controller("usController", usController)
    .controller("mapController", mapController)
    .config(['$routeProvider', '$locationProvider', routingConfig])
    .service("shopType", shopType)
    .service("usModelD", usModel)
    .service("putnam_county_adv", putnam_county_adv)
    .service("putnam_county_BBNSS", putnam_county_BBNSS)
    .service("indexModel", indexModel)
})();