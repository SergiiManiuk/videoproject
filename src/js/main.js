var appLesson = angular.module('lesson_module', []);/**
* lesson_module Module
*
* Description
*/
appLesson.controller('showList', function(){
	this.tempVar = 'tempVar',
	this.friends = [
      {name:'John', age:25, gender:'boy'},
      {name:'Jessie', age:30, gender:'girl'},
      {name:'Johanna', age:28, gender:'girl'},
      {name:'Joy', age:15, gender:'girl'},
      {name:'Mary', age:28, gender:'girl'},
      {name:'Peter', age:95, gender:'boy'},
      {name:'Sebastian', age:50, gender:'boy'},
      {name:'Erika', age:27, gender:'girl'},
      {name:'Patrick', age:40, gender:'boy'},
      {name:'Samantha', age:60, gender:'girl'}
    ];
    this.addPerson = function() {
    	//this.friends.push({name: this.name, age:this.age, gender:this.gender})
    	this.name = '';
    	this.age = '';
    	this.gender = '';
    	console.log(this);

    }
    this.removePerson = function(index) {
    	if (confirm('Точно?')) {
    		this.friends.splice(index, 1);	
    	}
    }
    this.sortField = 'age';
    this.sortReverse = false;
    this.sort = function (newField){
    	this.sortField = newField;
    	this.sortReverse = !this.sortReverse;
    }
		this.deleteSelected = function() {
		  this.friends = this.friends.filter(function(friend) {
		    return !friend.forRemoved;
		  });
		}
})

appLesson.directive('templateAddFriend', function(scope, element, attrs){
	return {
		template: 
			'<tr ng-repeat="friend in showList.friends">'+
				'<td>{{friend.name}}</td>'+
				'<td>{{friend.age}}</td>'+
				'<td>{{friend.gender}}</td>'+
			'</tr>',
		restrict: 'E',
		transclude: true,
		link: function(){
			console.log('sdf')
		}
	}
})
