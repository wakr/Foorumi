FoorumApp.controller('TopicsListController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
  
  
    $scope.newTopic = {
        name: "",
        description: ""
    };
  
    Api.getTopics().success(function(topics){ // initializes topics when started
        $scope.topics = topics; 
    });
  
  
    $scope.addTopic = function(){ // function for adding new 
        
        Api.addTopic($scope.newTopic).success(function(topic){
            var path = "#/topics/" + topic.id;
            debugger;
            $location.path('/topics/' + topic.id);
        });
        
    };
  
});
