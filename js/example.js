// names of "ng-app" must match the values of "ng-app" in HTML; [ ] contains the modules of Angular we are using
angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo')
  .config(function($tooltipProvider) {
    $tooltipProvider.options({
      appendToBody: true
    });
  })
// ParentCtrl  controller: add new data list
angular.module('ui.bootstrap.demo').controller('ParentCtrl', function ($scope,$http)
{
	
	$scope.saigon = {
		"value": [
		  {
		  	"id":1,
		    "name_driver" : "Leo Linh",
		    "image_driver":"avatar.jpg",
		    "phone" : "6594457422",
		    "vehicle" : "SGD1234F",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		  {
		  	"id":2,
		    "name_driver" : "",
		    "image_driver":"avatar.jpg",
		    "phone" : "6594457562",
		    "vehicle" : "SDD1234F",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },

		  {
		  	"id":3,
		    "name_driver" : "Linh Hoa",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595457562",
		    "vehicle" : "",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		  {
		  	"id":4,
		    "name_driver" : "Yang Tu",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595457561",
		    "vehicle" : "ADD12343",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		   {
		  	"id":5,
		    "name_driver" : "Yang Yang",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595555561",
		    "vehicle" : "QKA12343",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		  {
		  	"id":6,
		    "name_driver" : "Ho Min",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595556661",
		    "vehicle" : "TTT12343",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		  {
		  	"id":7,
		    "name_driver" : "Tee Ling",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595335561",
		    "vehicle" : "GHF15543",
		    "name_vehicle": "ToYoTa",
		    "image_vehicle":"download.jpg",
		  },
		   {
		  	"id":8,
		    "name_driver" : "Luu Bie",
		    "image_driver":"avatar.jpg",
		    "phone" : "6598888888",
		    "vehicle" : "DAF12343",
		    "name_vehicle": "ToYoTa Z",
		    "image_vehicle":"download.jpg",
		  },
		   {
		  	"id":9,
		    "name_driver" : "Jen Ny",
		    "image_driver":"avatar.jpg",
		    "phone" : "659999999",
		    "vehicle" : "TFT77777",
		    "name_vehicle": "ToYoTa",
		    "image_vehicle":"download.jpg",
		  },
		   {
		  	"id":10,
		    "name_driver" : "Jon",
		    "image_driver":"avatar.jpg",
		    "phone" : "6590000001",
		    "vehicle" : "TTF22222",
		    "name_vehicle": "ToYoTa",
		    "image_vehicle":"download.jpg",
		  },
		   {
		  	"id":11,
		    "name_driver" : "Chery Small",
		    "image_driver":"avatar.jpg",
		    "phone" : "6591212121",
		    "vehicle" : "TFF67891",
		    "name_vehicle": "ToYoTa X",
		    "image_vehicle":"download.jpg",
		  },
		   {
		  	"id":12,
		    "name_driver" : "Small Small",
		    "image_driver":"avatar.jpg",
		    "phone" : "6591313133",
		    "vehicle" : "",
		    "name_vehicle": "ToYoTa X",
		    "image_vehicle":"download.jpg",
		  },	
		   {
		  	"id":13,
		    "name_driver" : "",
		    "image_driver":"avatar.jpg",
		    "phone" : "6591414141",
		    "vehicle" : "AFF12345",
		    "name_vehicle": "ToYoTa N",
		    "image_vehicle":"download.jpg",
		  },			  
		]
		};

		$scope.hanoi = {
		"value": [
		  {
		  	"id":1,
		    "name_driver" : "HN Li Naxing",
		    "image_driver":"avatar.jpg",
		    "phone" : "6594457422",
		    "vehicle" : "HND1234F",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		  {
		  	"id":2,
		    "name_driver" : "HN Leo Young",
		    "image_driver":"avatar.jpg",
		    "phone" : "6594457562",
		    "vehicle" : "HND1234F",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },

		  {
		  	"id":3,
		    "name_driver" : "HN Linh Hoa",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595457562",
		    "vehicle" : "HND12343",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		  {
		  	"id":4,
		    "name_driver" : "HN Yang Tu",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595457561",
		    "vehicle" : "HND15343",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		   {
		  	"id":5,
		    "name_driver" : "HN Yang Yang",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595555561",
		    "vehicle" : "AFF12343",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },		  
		]
		};

		$scope.hue = {
		"value": [
		  {
		  	"id":1,
		    "name_driver" : "H Li Naxing",
		    "image_driver":"avatar.jpg",
		    "phone" : "6594457422",
		    "vehicle" : "SGH1234F",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		  {
		  	"id":2,
		    "name_driver" : "H Leo Young",
		    "image_driver":"avatar.jpg",
		    "phone" : "6594457562",
		    "vehicle" : "SDH1434F",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },

		  {
		  	"id":3,
		    "name_driver" : "H Linh Hoa",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595457562",
		    "vehicle" : "SDH42343",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		  {
		  	"id":4,
		    "name_driver" : "H Yang Tu",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595457561",
		    "vehicle" : "ADH12333",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },
		   {
		  	"id":5,
		    "name_driver" : "H Yang Yang",
		    "image_driver":"avatar.jpg",
		    "phone" : "6595555561",
		    "vehicle" : "AFH12343",
		    "name_vehicle": "Lamborghini Aventador",
		    "image_vehicle":"download.jpg",
		  },		  
		]
		}; 	 	
	
})
.directive('mytext', function($rootScope){
 
    return {
            templateUrl: "text.html",
           scope: {
		      listt: '@',
		      selectt : '@',
		    },
       link: function($scope, iElement, attributes) {      	
       	$scope.isCollapsed = true;
    	var check = attributes.listt;
    	var id = attributes.selectt;
    	//var check  = $scope.$eval(attributes.list);
	    $scope.myData = {}; // contains items of the returned list
		$scope.myText = ' Select Driver to pair '; // displayed text
		$scope.textSave = ''; // save myText variable in case user expand the dropdown list but don't choose anything
		
		// if the list is in "slist" of parent’s controller 
		if(check == 'saigon' || check == 'hanoi' ||check == 'hue')
		{
		
		var my_data = $scope.$parent[check]['value'];
		// get the id
		

		// if that id exists and is NOT NULL, find it in the list			
		if(id != undefined && id != '' )
		{
			var name_driver = '';
			var vehicle = '';
			// use loop to find the id
			angular.forEach(my_data, function(value, key){
		        if(id == value.id)
		        {
		        	name_driver = value.name_driver;
		        	vehicle = value.vehicle;	
		        }
		    });
		    // if "name_driver" is NULL
			if(name_driver =='')
			{
				name_driver = '-';
			}
			if(vehicle == '')
			{
				vehicle =  '-';
			}
			// if "name_driver" isn't NULL
			if(vehicle != '-' || name_driver !='-' ){
				$scope.myText = name_driver +' / '+ vehicle;
				$scope.textSave = $scope.myText;
				$scope.myData = $scope.$parent[check]['value'];
				angular.element(document.querySelector( '#button_toggle' )).addClass('bg-button');
				angular.element(document.querySelector( '#button_toggle' )).addClass('bg-button-a');
			}
			else
			{
				$scope.myText = ' Select Driver / Pair Vehicle ';
				$scope.myData = $scope.$parent[check]['value'];
			}
			
			
		}
		// else show items of the list
		else
		{
			$scope.myText = ' Select Driver / Pair Vehicle ';
			$scope.myData = $scope.$parent[check]['value'];

		}

		
	}
	// if the list doesn't exist or is NULL, use "saigon" (of parent's controller) as the default list
	else
	{
			
		$scope.myData = $scope.$parent.saigon.value;
		check = 'saigon';		
	
	}

	// event "ng-click" of "li" (in html) will trigger function "select"
	$scope.select = function(e){
		// close the dropdown list
		$scope.showTooltip = false; 
	 	$scope.isCollapsed = true;
	 	// get the element calling "ng-click"
		var text = angular.element(e.currentTarget);
		// get atrr "data-select" of that element
		var select = text.attr('data-select');
		// add attr "select" & "list" and remove class "bg-button"
		angular.element(document.querySelector( 'mytext' )).attr('selectt',select);
		angular.element(document.querySelector( 'mytext' )).attr('listt',check);
		angular.element(document.querySelector( '#button_toggle' )).addClass('bg-button');
		angular.element(document.querySelector( '#button_toggle' )).addClass('bg-button-a');
		$scope.myText = text.text();
		$scope.textSave = text.text();
				  	
	};

	// filter data when search
	$scope.friendContainsSearchText = function(x)
	{
		// if "searchText" is NOT FOUND
		if(!$scope.searchText) return 1;
		// find "searchText" in column "name_driver" or "vehicle" (not case-sensitive)
	    else
	    return x.name_driver.toLowerCase().indexOf($scope.searchText.toLowerCase()) >= 0 || x.vehicle.toLowerCase().indexOf($scope.searchText.toLowerCase()) >= 0
	}

	//  event "ng-mouseover" of "li" (in html) will trigger function "expression"
	$scope.expression = function(e){
		// hide tooltip
		$scope.showTooltip = false;		   
		var element_hover = angular.element(e.currentTarget);
		// load data of hovered item to the tooltip
		$scope.image_driver_t = element_hover.attr('data-image-driver');
		$scope.name_driver_t = element_hover.attr('data-name-driver');
		$scope.phone_t  = element_hover.attr('data-phone');
		$scope.vehicle_t = element_hover.attr('data-vehicle');
		$scope.image_vehicle_t = element_hover.attr('data-image-vehicle');
		$scope.name_vehicle_t = element_hover.attr('data-name-vehicle'); 
		element_hover.removeAttr('tooltip-enable');
		// show tooltip
		$scope.showTooltip = true;
	}
      

      
 	},
 }
              
});

