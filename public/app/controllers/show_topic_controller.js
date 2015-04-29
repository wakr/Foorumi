FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  // Toteuta kontrolleri tähän
  
  Api.getTopic($routeParams.id).success(function(topic){ // initializes topics when started
        $scope.topic = topic;
    });
  
  
});
