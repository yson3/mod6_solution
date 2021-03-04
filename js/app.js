(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.check = function () {
		if ($scope.dishes === undefined || $scope.dishes == "") {
			$scope.message = "Please enter data first";
			$scope.textStyle = {
				color: "red"
			}
			$scope.borderStyle = {
				border: "solid 1px red"
			}
			return;
		}

		var dishes = String($scope.dishes).split(',');
		var filtered = dishes.filter(
			dish => dish != "");

		if (filtered.length <= 3) {
			$scope.message = "Enjoy!";
		} else {
			$scope.message = "Too Much!";
		}
		
		$scope.textStyle = {
			color: "green"
		}
		$scope.borderStyle = {
			border: "solid 1px green"
		}
	}
};

})();
