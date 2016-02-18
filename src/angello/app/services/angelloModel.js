angular.module('angularTrainingApp').service('AngelloModel', function(){
  var service = this,
    stories = [
      {
        title: 'First story',
  description: 'Our first story.',
  criteria: 'Criteria pending.',
  status: 'To Do',
  type: 'Feature',
  reporter: 'Lukas Ruebbelke',
  assignee: 'Brian Ford'
},
    ]
  service.getStories=function(){
    return stories;
  };
});
