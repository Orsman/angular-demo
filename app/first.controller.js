angular
	.module('app')
	.controller('firstCtrl', firstCtrl);

function firstCtrl(DataHandlerFactory) {
	var vm = this;

	// Bind scope object to object in factory
	vm.user = DataHandlerFactory.user;

	// Bind method from factory to the scope
	vm.getUser = DataHandlerFactory.getUser;

	// Init function
	vm.getUser(1);
}