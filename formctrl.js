(function (){
    var app = angular.module('richReddit');
    
    app.controller('formCtrl', function($scope,redditService){
        redditService.getReddits().then(function(redditPosts){
  $scope.reddits=redditPosts;
            
            console.log($scope.reddits)
        })  
  }); 
 })();