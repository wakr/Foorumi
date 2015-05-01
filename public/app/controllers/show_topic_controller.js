FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  // Toteuta kontrolleri tähän
  
  
  $scope.newTopic = "";
  $scope.newContent = "";
  
  Api.getTopic($routeParams.id).success(function(topic){ // initializes topics when started
        $scope.topic = topic;
    });
  
  
   $scope.addMessage = function(){
     var newMessage = {
       title: $scope.newTopic,
       content: $scope.newContent
     };
     
     Api.addMessage(newMessage, $routeParams.id).success(function(message){
         $location.path('/messages/' + message.id);
     });
     
   };
  
  
  
});
