var app = angular.module("expenseApp", []);

app.controller("addExpenseController", function($scope){ 
	$scope.expenseData = []; 
	$scope.expensecategory='';
	$scope.tblNotification = true;
	$scope.expensecategories=[
		{value:1, label:'Groceries'},
		{value:2, label:'Bills & Payments'},
		{value:3, label:'Maintenance & Repairs'},
	];
	
	$scope.addExpense = function(){
		$scope.tblNotification = false; 
		$scope.expenseData.push({title:$scope.expensetitle, amount:$scope.expenseamount, category:$scope.category}); 
	} 
	$scope.clearExpense = function(){ 
		$scope.expenseData = [];  
		$scope.tblNotification = true;
	} 
});