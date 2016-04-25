angular
	.module('app')
	.controller('secondCtrl', secondCtrl);

function secondCtrl(DataHandlerFactory) {
	var vm = this;

	vm.data = DataHandlerFactory.user;
	vm.getData = getUser;
	vm.breakConnection = breakConnection;

	// Init function
	DataHandlerFactory.getUser(1);

	// Methods
	function getUser(id) {
		DataHandlerFactory.getUser(id)
			.then(function(response) {
				// console.log('return response in ctrl: ', response);
			});
	}

	function breakConnection() {
		vm.data = {};
	}
}