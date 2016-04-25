
angular
	.module('app')
	.factory('DataHandlerFactory', DataHandler);

function DataHandler($http) {
	var factory = {
		user: {},
		getUser: getUser,
	};

	return factory;

	////////////////////////

	function getUser(id) {

		return $http.get('./userdata' + id + '.json')
			.then(function(response) {
				// console.log('Got data from $http');

				// Example 1
				// factory.user = response.data;

				// Example 2
				// factory.user.name = response.data.name;
				// factory.user.age = response.data.age;
				// factory.user.strength = response.data.strength;

				// Example 3
				angular.copy(response.data, factory.user);

				return response.data;
			});
	}

}