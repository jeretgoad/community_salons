( function()
{
    angular.module("salons",['ngRoute']);
    
   
    var usModel = function($http)
    {
      var workersArray = function()
      {
          return $http.get("../JSON/community_salons_worker.json"); 
      }
      
      var addWorker = function(worker)
      {
          return $http.post("worker/add", worker);
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
            var arrayAds = $http.get("../JSON/putnam_county_advertisement.json");
            return arrayAds;
        }
      
        var addAnAd = function(company)
        {
            return $http.post("advertisement/add", company);
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
            return $http.post("salon/add", salon);
        }
      
        return {
            allSalons:salonArray,
            addThisSalon:addSalon
        } 
    };
    
    var homeController = function($scope, putnam_county_adv,  putnam_county_BBNSS, $location)
    {
        $scope.advertisements = [];
        $scope.nearBarbers = [];
        $scope.nearBeauties = [];
        $scope.nearNails = [];
        $scope.nearSpas = [];
        $scope.nearStyles = [];
        var AllTheSalons = [];
        putnam_county_adv.allAds()
            .then(function(data) {
            $scope.advertisements = data.data;
                var lastIndex = $scope.advertisements.length -1;
            $scope.prev = $scope.advertisements[0];
            $scope.curr = $scope.advertisements[1];
            $scope.next = $scope.advertisements[2];
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
            }
        });
        
        putnam_county_BBNSS.allSalons()
            .then(function(data) {
            AllTheSalons = data.data;
            $scope.nearBarbers = shops_filter("barber", AllTheSalons);
            $scope.nearBeauties = shops_filter("beauty", AllTheSalons);
            $scope.nearNails = shops_filter("nail", AllTheSalons);;
            $scope.nearSpas = shops_filter("spa", AllTheSalons);;
            $scope.nearStyles = shops_filter("style", AllTheSalons);;
        });
        
        
    }
    var barbersController = function($scope, putnam_county_adv, putnam_county_BBNSS, $location)
    {
        $scope.advertisements = [];
        putnam_county_adv.allAds()
            .then(function(data) {
            $scope.advertisements = data.data;
            var lastIndex = $scope.advertisements.length -1;
            $scope.prev = $scope.advertisements[0];
            $scope.curr = $scope.advertisements[1];
            $scope.next = $scope.advertisements[2];
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
            }
        });
        putnam_county_BBNSS.allSalons()
            .then(function(data) {
            AllTheSalons = data.data;
            $scope.salons = shops_filter("barber", AllTheSalons);
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
    
    var beautiesController = function($scope, putnam_county_adv, putnam_county_BBNSS, $location)
    {
        $scope.advertisements = [];
        putnam_county_adv.allAds()
            .then(function(data) {
            $scope.advertisements = data.data;
            var lastIndex = $scope.advertisements.length -1;
            $scope.prev = $scope.advertisements[0];
            $scope.curr = $scope.advertisements[1];
            $scope.next = $scope.advertisements[2];
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
            }
        });
        putnam_county_BBNSS.allSalons()
            .then(function(data) {
            AllTheSalons = data.data;
            $scope.salons = shops_filter("beauty", AllTheSalons);
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
    
    var nailsController = function($scope, putnam_county_adv, putnam_county_BBNSS, $location)
    {
        $scope.advertisements = [];
        putnam_county_adv.allAds()
            .then(function(data) {
            $scope.advertisements = data.data;
            var lastIndex = $scope.advertisements.length -1;
            $scope.prev = $scope.advertisements[0];
            $scope.curr = $scope.advertisements[1];
            $scope.next = $scope.advertisements[2];
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
            }
        });
        putnam_county_BBNSS.allSalons()
            .then(function(data) {
            AllTheSalons = data.data;
            $scope.salons = shops_filter("nail", AllTheSalons);
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
    
    var spasController = function($scope, putnam_county_adv, putnam_county_BBNSS, $location)
    {
        $scope.advertisements = [];
        putnam_county_adv.allAds()
            .then(function(data) {
            $scope.advertisements = data.data;
            var lastIndex = $scope.advertisements.length -1;
            $scope.prev = $scope.advertisements[0];
            $scope.curr = $scope.advertisements[1];
            $scope.next = $scope.advertisements[2];
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
            }
        });
        putnam_county_BBNSS.allSalons()
            .then(function(data) {
            AllTheSalons = data.data;
            $scope.salons = shops_filter("spa", AllTheSalons);
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
    
    var stylesController = function($scope, putnam_county_adv, putnam_county_BBNSS, $location)
    {
        $scope.advertisements = [];
        putnam_county_adv.allAds()
            .then(function(data) {
            $scope.advertisements = data.data;
            var lastIndex = $scope.advertisements.length -1;
            $scope.prev = $scope.advertisements[0];
            $scope.curr = $scope.advertisements[1];
            $scope.next = $scope.advertisements[2];
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
            }
        });
        putnam_county_BBNSS.allSalons()
            .then(function(data) {
            AllTheSalons = data.data;
            $scope.salons = shops_filter("style", AllTheSalons);
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
    
    
    var usController = function($scope, putnam_county_adv,  usModelD, $location)
    {
        $scope.advertisements = [];
        $scope.workers = [];
        putnam_county_adv.allAds()
            .then(function(data) {
            $scope.advertisements = data.data;
            var lastIndex = $scope.advertisements.length -1;
            $scope.prev = $scope.advertisements[0];
            $scope.curr = $scope.advertisements[1];
            $scope.next = $scope.advertisements[2];
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
            }
        });
        usModelD.allWorkers()
            .then(function(data) {
            $scope.workers = data.data;
        });
    }
    
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
    
    //set index to 0 for gallery show
    var setGalleryIndex = function(shops)
    {
        for(var i = 0; i < shops.length; i++)
            {
                shops[i].index = 0;
            }
    };
    
    
    //get user geolocation and return it
	var getLocation = function($scope) {
    	var latitude, longitude = 0;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				latitude = position.coords.latitude;
				longitude = position.coords.longitude;
				getCoords(latitude, longitude);
			});
		} else {
			getError(err);
		}
	};
    
    
    
    var getCoords = function(lat, long) {
        var clientLat = lat;
        var clientLong = long;
        var miles = 0.0;
        putnam_county_adv.allAds()
            .then(function(data) {});
        for(var i = 0; i < putnam_county_BBNSS.length; i++)
            {
                var salLat = putnam_county_BBNSS[i].latitude;
                var salLong = putnam_county_BBNSS[i].longitude;
            }
        
    };
	
    
    var routingConfig = function($routeProvider)
    {
        $routeProvider
        .when("/",
              {
                templateUrl:"../views/home.html",
                controller: "homeController"
            })
        .when("/barbers",
              {
                templateUrl:"../views/shops.html",
                controller: "barbersController"
            })
        .when("/beauties",
              {
                templateUrl:"../views/shops.html",
                controller: "beautiesController"
            })
        .when("/nails",
              {
                templateUrl:"../views/shops.html",
                controller:"nailsController"
        })
        .when("/spas", 
              {
                templateUrl:"../views/shops.html",
                controller: "spasController"
            })
        .when("/styles", 
              {
                templateUrl:"../views/shops.html",
                controller: "stylesController"
            })
        .when("/us",
             {
                templateUrl:"../views/us.html",
                controller:"usController"
            
        })
        .otherwise({redirectTo:"../views/home.html"});   
    };
    
    angular
    .module("community-salons", [])
    .controller("homeController", homeController)
    .controller("barbersController", barbersController)
    .controller("beautiesController", beautiesController)
    .controller("nailsController", nailsController)
    .controller("spasController", spasController)
    .controller("stylesController", stylesController)
    .controller("usController", usController)
    .config(['$routeProvider', routingConfig])
    .service("usModelD", usModel)
    .service("putnam_county_adv", putnam_county_adv)
    .service("putnam_county_BBNSS", putnam_county_BBNSS)
})();