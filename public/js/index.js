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
    
    
    var putnam_county_BBNSS = function()
    {
        return [
            {
                name: "Slick Spot",
                barber: false,
                beauty: true,
                nail: false,
                spa: false,
                style: true,
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
                barber: true,
                beauty: true,
                nail: false,
                spa: true,
                style: true,
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
                barber: true,
                beauty: true,
                nail: false,
                spa: false,
                style: false,
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
            },
            {
                name: "Randy's Hotspot",
                barber: true,
                beauty: false,
                nail: true,
                spa: false,
                style: false,
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
                barber: true,
                beauty: false,
                nail: false,
                spa: false,
                style: false,
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
                barber: true,
                beauty: false,
                nail: false,
                spa: false,
                style: false,
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
            },
            {
                name: "Sally's Spot",
                barber: false,
                beauty: false,
                nail: true,
                spa: false,
                style: true,
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
                barber: false,
                beauty: false,
                nail: true,
                spa: false,
                style: false,
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
                barber: false,
                beauty: true,
                nail: true,
                spa: false,
                style: false,
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
    
    
    var shops_filter_model = function(putnam_county_BBNSS)
    {
        var barbers = [];
        var beauties = [];
        var nails = [];
        var spas = [];
        var styles = [];
         for(var i = 0; i < putnam_county_BBNSS.length; i++)
            {
                var current = putnam_county_BBNSS[i];
                
                if(current.barber === true)
                    {
                        barbers.push(current);
                        console.log("barbers: " + barbers.length);
                    }
                
                if(current.beauty === true)
                    {
                        beauties.push(current);
                        console.log("beauties: " + beauties.length);
                    }
                
                if(current.nail === true)
                    {
                        nails.push(current);
                        console.log("nails: " + nails.length);
                    }
                
                if(current.spa === true)
                    {
                        spas.push(current);
                        console.log("spas: " + spas.length);
                    }
                
                if(current.style === true)
                    {
                        styles.push(current);
                        console.log("styles: " + styles.length);
                    }
            }
        return {
                barbers: barbers,
                beauties: beauties,
                nails: nails,
                spas: spas,
                styles: styles
            }
    };
    
    var homeController = function($scope, shops_filter_model, $location)
    {
        getLocation();
        $scope.nearBarbers = shops_filter_model.barbers;
        $scope.nearBeauties = shops_filter_model.beauties;
        $scope.nearNails = shops_filter_model.nails;
        $scope.nearSpas = shops_filter_model.spas;
        $scope.nearStyles = shops_filter_model.styles;
        
    }
    var barbersController = function($scope, shops_filter_model, $location)
    {
        $scope.salons = shops_filter_model.barbers;
        setGalleryIndex($scope.salons);
        //set gallery index to previous
        $scope.prev = function(gallery)
        {
            gallery.index -= 1;  
        };
    
        //set gallery index to next
        $scope.next = function(gallery)
        {
            gallery.index += 1;  
        };
        
    }
    
    var beautiesController = function($scope, shops_filter_model, $location)
    {
        $scope.salons = shops_filter_model.beauties;
        setGalleryIndex($scope.salons);
        //set gallery index to previous
        $scope.prev = function(gallery)
        {
            gallery.index -= 1;  
        };
    
        //set gallery index to next
        $scope.next = function(gallery)
        {
            gallery.index += 1;  
        };
        
    }
    
    var nailsController = function($scope, shops_filter_model, $location)
    {
        $scope.salons = shops_filter_model.nails;
        setGalleryIndex($scope.salons);
        //set gallery index to previous
        $scope.prev = function(gallery)
        {
            gallery.index -= 1;  
        };
    
        //set gallery index to next
        $scope.next = function(gallery)
        {
            gallery.index += 1;  
        };
        
    }
    
    var spasController = function($scope, shops_filter_model, $location)
    {
        $scope.salons = shops_filter_model.spas;
        setGalleryIndex($scope.salons);
        //set gallery index to previous
        $scope.prev = function(gallery)
        {
            gallery.index -= 1;  
        };
    
        //set gallery index to next
        $scope.next = function(gallery)
        {
            gallery.index += 1;  
        };
        
    }
    
    var stylesController = function($scope, shops_filter_model, $location)
    {
        $scope.salons = shops_filter_model.styles;  
        setGalleryIndex($scope.salons);
        //set gallery index to previous
        $scope.prev = function(gallery)
        {
            gallery.index -= 1;  
        };
    
        //set gallery index to next
        $scope.next = function(gallery)
        {
            gallery.index += 1;  
        };
    }
    
    
    var usController = function($scope, usModelD, $location)
    {
        $scope.workers = usModelD;
    }
    
    
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
    .module("salons")
    .controller("homeController", homeController)
    .controller("barbersController", barbersController)
    .controller("beautiesController", beautiesController)
    .controller("nailsController", nailsController)
    .controller("spasController", spasController)
    .controller("stylesController", stylesController)
    .controller("usController", usController)
    .config(['$routeProvider', routingConfig])
    .service("usModelD", usModel)
    .service("putnam_county_BBNSS", putnam_county_BBNSS)
    .service("shops_filter_model", shops_filter_model)
})();