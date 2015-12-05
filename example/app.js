'use strict';

var app = angular.module('testApp', ['ngTimePicker']);
app.controller('testController', function ($scope) {
	$scope.settings = {
		first: {
			dropdownToggleState: false,
			time: {
				fromHour: '02',
				fromMinute: '30',
				toHour: '01',
				toMinute: '20'
			}
		},
		second: {
			dropdownToggleState: false,
			time: {
				fromHour: '02',
				fromMinute: '04',
				toHour: '01',
				toMinute: '20'
			},
			noValidation: true
		},
		third: {
			dropdownToggleState: true,
			time: {},
			noRange: true,
			format: 12,
			theme: 'dark'
		}
	};
	$scope.onApplyTimePicker = function () {
		console.log('time range applied');
	};
	$scope.onResetTimePicker = function () {
		console.log('time range reset');
	};
});

app.$inject = [ '$scope' ];