/*
	<element drp-route-class="{'class-name': 'match-regexp',...}">...</element>
*/
angular.module('com.david-rodenas.DrpRouteClass',[]).directive('drpRouteClass', 
		['$location','$parse', function 
		( $location , $parse ) { 'use strict';

	return {
		restrict: 'A',
		compile: function(element, attrs) {

			var getter = $parse(attrs.drpRouteClass);

			return function(scope, element/*, attrs*/) {
				var added = [];

				scope.$watch(function() {
					return $location.path();
				}, function(newPath) {
					var className, match, matches, i, l;

					if (newPath === undefined || newPath === null) { return; }

					for (i = 0, l = added.length; i < l; i++) {
						element.removeClass(added[i]);
					}

					matches = getter(scope);

					added.length = 0;
					for (className in matches) {
						if (matches.hasOwnProperty(className)) {
							match = matches[className];
							if (newPath.match(match) && !element.hasClass(className)) {
								element.addClass(className);
								added.push(className);
							}
						}
					}
				});
			};
		},
	};

}]);