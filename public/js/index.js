( function()
{
    angular.module("salons",['ngRoute']);
    
    var usModel = function()
    {
      return [
          {
              name: "Steven Trojcak",
              number: "931-239-9932",
              title: "Part Owner",
              disc: "Trojcak is the founder and part owner of Community Salons. Responsible for being the spokes person for our company. Deals with most of the negotiations salons and businesses. Establishes the contracts between Commuinty Salons and the other businesses involved. Responsible for answering any questions dealing with issues amongst businesses, contracts, and general questions about our company",
              img: "../IMG/owner.jpeg"
          },
          {
              name: "Jeret Goad",
              number: "931-704-2989",
              title: "Part Owner",
              disc: "Goad is Part owner of Community Salons. Responsible for creating the web database, contracts, pamplets, and recognition memorabilias. Also helps with negotiations with the other businesses on a smaller scale. Deals with almost all the technical side of the company. Responsible for answering questions about the web application or the digital frames",
              img: "../IMG/owner.jpeg"
          }
      ]  
    };
    
     var stylesModel = function()
    {
        return [
            {
                name: "Slick Spot",
                address: "1800 W",
                city: "Cookeville",
                state: "TN",
                zip: 38501,
                latitude: 42.66675,
                longitude: -82.2230000002,
                phone: "888-888-8888",
                owner: "Tommy Boy",
                Monday: "Mon. 8-5",
                Tuesday:"Tues. 8-5",
                Wednesday:"Wed. 8-4",
                Thursday: "Thurs. 8-5",
                Friday: "Fri. 8-5",
                Saturday: "Sat. 12-5",
                Sunday: "Sun. Closed",
                distance: 2.4,
                index: 0,
                ownImg: "../IMG/owner.jpeg",
                img: [
                        "../IMG/styleSalon1.jpg",
                        "../IMG/styleSalon1-2.jpg",
                        "../IMG/styleSalon2.jpg"
                ],
                
                ifLink: true,
                link: "https://www.facebook.com/jeret.goad/"
            },
            {
                name: "Style Cutz",
                address: "540 E",
                city: "Cookeville",
                state: "TN",
                zip: 38501,
                latitude: 28.3961,
                longitude: -84.6922230000002,
                phone: "888-888-8888",
                owner: "John Doe",
                Monday: "Mon. 8-5",
                Tuesday:"Tues. 8-5",
                Wednesday:"Wed. 8-12",
                Thursday: "Thurs. 8-5",
                Friday: "Fri. 8-4",
                Saturday: "Sat. 8-5",
                Sunday: "Sun. 1-5",
                distance: 6.6,
                index: 0,
                ownImg: "../IMG/owner.jpeg",
                img: [
                        "../IMG/styleSalon2.jpg"
                ],
                link: "https://www.facebook.com/jeret.goad/"
            },
            {
                name: "Beaut Cutz",
                address: "888 N",
                city: "Cookeville",
                state: "TN",
                zip: 38501,
                latitude: 36.809631,
                longitude: -85.6492200002,
                phone: "888-888-8888",
                owner: "Becca Bynes",
                Monday: "Mon. 8-5",
                Tuesday:"Tues. 8-5",
                Wednesday:"Wed. 8-5",
                Thursday: "Thurs. 9-5",
                Friday: "Fri. 9-5",
                Saturday: "Sat. 9-5",
                Sunday: "Sun. 9-5",
                distance: 12,
                index: 0,
                ownImg: "../IMG/owner.jpeg",
                img: [
                        "../IMG/styleSalon3.jpg",
                        "../IMG/styleSalon1-2.jpg"
                ],
                link: "https://www.facebook.com/jeret.goad/"
            }
            
        ]
    };
    
    var barbersModel = function()
    {
        return [
            {
                name: "Randy's Hotspot",
                address: "44 S",
                city: "Cookeville",
                state: "TN",
                zip: 38501,
                latitude: 34.3679631,
                longitude: -89.649456002,
                phone: "888-888-8888",
                owner: "Jason Oldem",
                Monday: "Mon. 8-8",
                Tuesday:"Tues. 8-8",
                Wednesday:"Wed. 8-5",
                Thursday: "Thurs. 8-8",
                Friday: "Fri. 8-8",
                Saturday: "Sat. 8-12",
                Sunday: "Sun. Closed",
                distance: 10,
                index: 0,
                ownImg: "../IMG/owner.jpeg",
                img: [
                        "../IMG/barberSalon1.jpg"
                ],
                link: "https://www.facebook.com/jeret.goad/"
            },
            {
                name: "Barber 101",
                address: "Davidson St",
                city: "Cookeville",
                state: "TN",
                zip: 38501,
                latitude: 38.23631,
                longitude: -83.6495440000002,
                phone: "888-888-8888",
                owner: "J.J. Fish",
                Monday: "Mon. 8-8",
                Tuesday:"Tues. 8-8",
                Wednesday:"Wed. 8-5",
                Thursday: "Thurs. 8-8",
                Friday: "Fri. 8-8",
                Saturday: "Sat. 8-12",
                Sunday: "Sun. Closed",
                distance: 0.01,
                index: 0,
                ownImg: "../IMG/owner.jpeg",
                img: [
                        "../IMG/barberSalon2.jpg"
                ],
                link: "https://www.facebook.com/jeret.goad/"
            },
            {
                name: "Buzz",
                address: "Broadway S",
                city: "Cookeville",
                state: "TN",
                zip: 38501,
                latitude: 36.3679631,
                longitude: -85.64922230000002,
                phone: "888-888-8888",
                owner: "Bob Aikers",
                Monday: "Mon. 9-5:30",
                Tuesday:"Tues. 9-5:30",
                Wednesday:"Wed. 9-4:30",
                Thursday: "Thurs. 9-5:30",
                Friday: "Fri. 9-5:30",
                Saturday: "Sat. 10-3",
                Sunday: "Sun. Closed",
                distance: 0.2,
                index: 0,
                ownImg: "../IMG/owner.jpeg",
                img: [
                        "../IMG/barberSalon3.jpg"
                ],
                link: "https://www.facebook.com/jeret.goad/"
            }
            ]
    };
    
    var nailsModel = function()
    {
        return[
            {
                name: "Sally's Spot",
                address: "Bake St",
                city: "Cookeville",
                state: "TN",
                zip: 38501,
                latitude: 29.7,
                longitude: -80.6230000002,
                phone: "888-888-8888",
                owner: "Sally Joe",
                Monday: "Mon. 9-6",
                Tuesday:"Tues.9-6",
                Wednesday:"Wed. 9-5",
                Thursday: "Thurs. 9-6",
                Friday: "Fri. 9-6",
                Saturday: "Sat. 12-4",
                Sunday: "Sun. Closed",
                distance: 3,
                index: 0,
                ownImg: "../IMG/owner.jpeg",
                img: [
                        "../IMG/nailSalon1.jpg"
                ],
                link: "https://www.facebook.com/jeret.goad/"
            },
            {
                name: "We Did Em",
                address: "Broadway S",
                city: "Cookeville",
                state: "TN",
                zip: 38501,
                latitude: 41.3679631,
                longitude: -83.643000002,
                phone: "888-888-8888",
                owner: "Kalea Black",
                Monday: "Mon. 10-6",
                Tuesday:"Tues. 10-6",
                Wednesday:"Wed. 10-5",
                Thursday: "Thurs. 10-6",
                Friday: "Fri. 10-6",
                Saturday: "Sat. Closed",
                Sunday: "Sun. Closed",
                distance: 5.4,
                index: 0,
                ownImg: "../IMG/owner.jpeg",
                img: [
                        "../IMG/nailSalon2.jpg"
                ],
                link: "https://www.facebook.com/jeret.goad/"
            },
            {
                name: "County Nails",
                address: "Broadway S",
                city: "Cookeville",
                state: "TN",
                zip: 38501,
                latitude: 32.9631,
                longitude: -87.64922002,
                phone: "888-888-8888",
                owner: "Terisa Hines",
                Monday: "Mon. 8-5",
                Tuesday:"Tues. 8-5",
                Wednesday:"Wed. 8-5",
                Thursday: "Thurs. 8-5",
                Friday: "Fri. Closed",
                Saturday: "Sat. 10-5",
                Sunday: "Sun. Closed",
                distance: 0.3,
                index: 0,
                ownImg: "../IMG/owner.jpeg",
                img: [
                        "../IMG/nailSalon3.jpg"
                ],
                link: "https://www.facebook.com/jeret.goad/"
            }
        ]
    };
    
    
    var homeController = function($scope, stylesModelD, barbersModelD, nailsModelD, $location)
    {
		$scope.distance = getLocation();
        $scope.nearStyles = stylesModelD;
        $scope.nearNails = nailsModelD;
        $scope.nearBarbers = barbersModelD;
    }
    
    var stylesController = function($scope, stylesModelD, $location)
    {
        $scope.salons = stylesModelD;
        $scope.next = function(gallery)
        {
          gallery.index += 1;  
        };
        $scope.prev = function(gallery)
        {
          gallery.index -= 1;  
        };
    }
    
    var barbersController = function($scope, barbersModelD, $location)
    {
        $scope.salons = barbersModelD;
        $scope.index = 0;
        $scope.next = function()
        {
          $scope.index += 1;  
        };
        $scope.prev = function()
        {
          $scope.index -= 1;  
        };
    }
    
    var nailsController = function($scope, nailsModelD, $location)
    {
        $scope.salons = nailsModelD;
        $scope.index = 0;
        $scope.next = function()
        {
          $scope.index += 1;  
        };
        $scope.prev = function()
        {
          $scope.index -= 1;  
        };
    }
    
    var usController = function($scope, usModelD, $location)
    {
        $scope.workers = usModelD;
    }
    
    
	//get user geolocation and return it
	var getLocation = function($scope) {
    	var latitude, longitude = 0;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				lat = position.coords.latitude;
				longitude = position.coords.longitude;
				console.log(lat + " " + longitude);
				return "Latitude: " + lat + "<br>Longitude: " + longitude;
			});
		} else {
			return "Geolocation is not supported by this browser.";
		}
	}
    

    var routingConfig = function($routeProvider)
    {
        $routeProvider
        .when("/",
              {
                templateUrl:"../views/home.html",
                controller: "homeController"
            })
        .when("/styles", 
              {
                templateUrl:"../views/shops.html",
                controller: "stylesController"
            })
        .when("/barbers",
              {
                templateUrl:"../views/shops.html",
                controller: "barbersController"
            })
        .when("/nails",
              {
                templateUrl:"../views/shops.html",
                controller:"nailsController"
        })
        .when("/us",
             {
                templateUrl:"../views/us.html",
                controller:"usController"
            
        })
        .otherwise({redirectTo:"../views/home.html"});   
    };
    
    angular
    .module("salons")
    .controller("homeController", homeController)
    .controller("stylesController", stylesController)
    .controller("barbersController", barbersController)
    .controller("nailsController", nailsController)
    .controller("usController", usController)
    .config(['$routeProvider', routingConfig])
    .service("usModelD", usModel)
    .service("stylesModelD", stylesModel)
    .service("barbersModelD", barbersModel)
    .service("nailsModelD", nailsModel)
	.service('getlocation', getLocation)
})();