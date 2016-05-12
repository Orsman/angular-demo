angular
	.module('app')
	.controller('secondCtrl', secondCtrl);

function secondCtrl(DataHandlerFactory) {
	var vm = this;

	// Bind scope object to object in factory
	vm.data = DataHandlerFactory.user;

	// Bind method from factory to the scope
	vm.getUser = DataHandlerFactory.getUser;

	// Private method
	vm.breakConnection = breakConnection;

	function breakConnection() {
		vm.data = {};
	}
}