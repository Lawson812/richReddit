(function(){
    var app = angular.module('richReddit')
app.directive('posts', function(){
        return{
            restrict:'E',
            templateUrl:'partials/posts.html',
            replace:true
        }
});
    })()