(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "Tell me what you wanna eat.";
  $scope.dishes = "";
  $scope.analyse = function() {
    if ($scope.dishes == "") $scope.message = "Please enter data first";
    else {
      var nbOfDishes = $scope.dishes.split(';').length;
      if (nbOfDishes <= 3) $scope.message = "Enjoy!";
      else $scope.message = "Too much!";
    }
  }
}

})();
