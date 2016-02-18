angular.module('Angello.Storyboard',['Angello.Common'])
  .controller('StoryboardCtrl',function(){
let storyboard= this;

    storyboard.someProperty ='My property';
    storyboard.someMethod = function(){};

    $scope.scopeProperty = 'Scope property';

    console.log('$scope', $scope);
});

