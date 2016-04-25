angular
	.module('app')
	.controller('firstCtrl', firstCtrl);

function firstCtrl(DataHandlerFactory) {
	var vm = this;

	vm.user = DataHandlerFactory.user;
	vm.getData = getUser;

	// Init function
	DataHandlerFactory.getUser(1);

	// Methods
	function getUser(id) {
		DataHandlerFactory.getUser(id)
			.then(function(response) {
				// console.log('return response in ctrl: ', response);
			});
	}
}