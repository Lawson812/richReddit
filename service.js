(function (){
    var app = angular.module('richReddit');
    
    app.factory('redditService', function($http){
        function getReddits() {
            var promise = $http({
                method: 'GET',
                url:'http://www.reddit.com/r/lettering.json'
            }).then(function(posts) {
             redditPosts = posts.data.data.children;
                console.log(redditPosts)
                return redditPosts;
                
                });
                        return promise;

            }; 
        
        function getImgs() {
            var imgPromise = $http({
                method: 'GET',
                url:'http://www.reddit.com/r/lettering.json'
            }).then(function(posts) {
             imgPosts = posts.data.data.children.data.thumbnail;
return imgPosts
                }
                
                );
                        return promise;

            }; 

        return {
            getReddits: getReddits,
            getImgs:getImgs
        }
        })
})();