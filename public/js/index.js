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
          return $http.get("../JSON/community_salons_worker.json"); 
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
    };
    
    
    var headerController = function($scope, indexModel, shopType, putnam_county_adv, $location, $route)
    {
        $scope.advertisements = [];
        var shops = ["barber", "beauty", "nail", "spa", "style"];
        
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
                if(shops.includes(shopType.type))
                {
                    shopType.type = typeShop;
                    $route.reload();
                }
                else
                {
                    shopType.type = typeShop;
                    $location.path("/shops");
                }
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
    }
    
    
    var homeController = function($scope, $rootScope, shopType, $location)
    {   
        var salonzo = $rootScope.salons.salonzo;
        $scope.nearBarbers = shops_filter("barber", salonzo);
        $scope.nearBeauties = shops_filter("beauty", salonzo);
        $scope.nearNails = shops_filter("nail", salonzo);
        $scope.nearSpas = shops_filter("spa", salonzo);
        $scope.nearStyles = shops_filter("style", salonzo);
        $scope.shops = function(typeShop)
        {
            shopType.type = typeShop;
            $location.path("/shops");
        }
        
        $scope.maps = function(salon)
        {
            salon.directions = 1;
            $location.path("/map");
        }
        
        $scope.checker = function()
        {
            if(salonzo[0].duration.length > 0)
                {
                    return true;
                }
            else
                {
                    return false;
                }
        }
    }
    
    var shopController = function($scope, $rootScope, shopType, $location)
    {
        $scope.salons = shops_filter(shopType.type, $rootScope.salons.salonzo);

        $scope.prevIndex = function(salon)
        {
            salon.index--;
        }
        
        $scope.nextIndex = function(salon)
        {
            salon.index++;
        }
        
        $scope.maps = function(salon)
        {
            salonDirections = salon;
            console.log(salonDirections.name);
            $location.path("/map");
        }
    }
    
    var usController = function($scope, usModelD, $location)
    {
        usModelD.allWorkers()
            .then(function(data) {
            var temp = data.data;
            $scope.workers = workersFilter(temp);
        });
    }
    
    var mapController = function($scope, $rootScope, $location)
    {
        var origin = {lat: 0, lng: 0};
        origin.lat = $rootScope.salons.coords.lat;
        origin.lng = $rootScope.salons.coords.lng;
        for(var i = 0; i < $rootScope.salons.salonzo.length; i++)
            {
                if($rootScope.salons.salonzo[i].directions === 1)
                    {
                        var salon = $rootScope.salons.salonzo[i];
                        $rootScope.salons.salonzo[i].directions = 0;
                        break;
                    }
            }
        var mapOptions = {
                  zoom: 4,
                  center: new google.maps.LatLng(origin.lat,origin.lng),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        
        $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.lng),
                      title: info.name
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h3>' + marker.title + '</h3>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
                createMarker(salon);
              

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }
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
	var salonUpdates = function(allSalons, cb) {
        var origin = {lat:0, lng:0};
		if (navigator.geolocation) 
        {
            navigator.geolocation.getCurrentPosition(function (position) {
                origin.lat = position.coords.latitude;
                origin.lng = position.coords.longitude;
                allSalons.coords = origin;
                var allCoords = [];
                for(var i = 0; i < allSalons.salonzo.length; i++)
                {
                    var coords = {lat: 0, lng: 0};
                    var salonUpdates = {lat:0, lng:0, distance:"", duration:""};
                    coords.lat = allSalons.salonzo[i].latitude;
                    coords.lng = allSalons.salonzo[i].longitude;
                    allCoords.push(coords);
                }
                var service = new google.maps.DistanceMatrixService;
                service.getDistanceMatrix({
                    origins: [origin],
                    destinations: allCoords,
                    travelMode: 'DRIVING',
                    unitSystem: google.maps.UnitSystem.IMPERIAL,
                    avoidHighways: false,
                    avoidTolls: false
                    }, function(response, status) {
                    if (status !== 'OK') 
                    {
                        cb('Error was: ' + status);
                    } 
                    else 
                    {
                        var originList = response.originAddresses;
                        var destinationList = response.destinationAddresses;
                        for (var i = 0; i < originList.length; i++) 
                        {
                            var results = response.rows[i].elements;
                            for (var j = 0; j < results.length; j++) 
                            {
                                allSalons.salonzo[j].distance = mySplit(results[j].distance.text);
                                allSalons.salonzo[j].duration = results[j].duration.text;
                            }
                        }
                        cb(null, allSalons);
                    }
                });
		  });
        }
        else 
        {
            cb(getError(err));
		}
	};
    
    var mySplit = function(string) {
        var array = string.split(' ');
        return parseInt(array[0]);
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
    .config(['$routeProvider', '$locationProvider', routingConfig])
    .controller("headerController", headerController)
    .controller("homeController", homeController)
    .controller("shopController", shopController)
    .controller("usController", usController)
    .controller("mapController", mapController)
    .service("shopType", shopType)
    .service("usModelD", usModel)
    .service("putnam_county_adv", putnam_county_adv)
    .service("putnam_county_BBNSS", putnam_county_BBNSS)
    .service("indexModel", indexModel)
    .run(function($rootScope, putnam_county_BBNSS) {
        $rootScope.salons = {salonzo:[], coords:{lat:0, lng:0}};
        putnam_county_BBNSS.allSalons()
            .then(function(data) {
            $rootScope.salons.salonzo = data.data;
            salonUpdates($rootScope.salons, function(err, oldSalons) {
                if(!err)
                {
                    $rootScope.salonzo = oldSalons;
                }
                else
                {
                    console.log(err);        
                }
            });
        });
    })
})();