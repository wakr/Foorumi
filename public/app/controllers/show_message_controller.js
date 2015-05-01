FoorumApp.controller('ShowMessageController', function($scope, $routeParams, $route, Api){
  // Toteuta kontrolleri tähän
  
  $scope.newReplyContent = "";
  
  Api.getMessage($routeParams.id).success(function(message){
     $scope.message = message; 
  });
  
  
  $scope.addReply = function(){
      
      var newReply = {
          content: $scope.newReplyContent
      };
      
      Api.addReply(newReply, $routeParams.id).success(function(reply){
          $route.reload();
      });
  };
  
  
});
