'use strict';

/**
 * @ngdoc function
 * @name angularTrainingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTrainingApp
 */
angular.module('angularTrainingApp')
  .controller('MainCtrl', function () {
    var main =this;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    main.stories=[
      {
        title: 'First story',
    description: 'Our first story.',
    criteria: 'Criteria pending.',
    status: 'To Do',
    type: 'Feature',
    reporter: 'Lukas Ruebbelke',
    assignee: 'Brian Ford'
  },
    {
      title: 'Second story',
      description: 'Do something.',
      criteria: 'Criteria pending.',
      status: 'Back Log',
      type: 'Feature',
      reporter: 'Lukas Ruebbelke',
      assignee: 'Brian Ford'
    },
    {
      title: 'Another story',
      description: 'Just one more.',
      criteria: 'Criteria pending.',
      status: 'Code Review',
      type: 'Enhancement',
      reporter: 'Lukas Ruebbelke',
      assignee: 'Brian Ford'
    }
    ];
  main.setCurrentStory=function(story){

  };


  });
