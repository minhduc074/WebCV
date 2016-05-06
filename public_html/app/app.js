/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('myApp', [])
        .controller('MyController', ['$scope', '$http', function ($scope, $http) {
                $http.get('app/info.json')
                        .success(function (res) {
                            $scope.cv = res;
                            $scope.partes = Object.keys($scope.cv.skills);
                        });
                //$scope.cv = angular.copy(cv);

                $scope.size = function (Obj) {
                    return Object.keys(Obj).length;
                };
                $scope.print = function (index) {
                    if (index > 0) {
                        return ", ";
                    } else {
                        return "";
                    }
                };
                $scope.truefalse = true;
                $scope.edit = function () {
                    $scope.truefalse = false;
                }
                $scope.save = function () {
                    $scope.truefalse = true;
                    //$scope.cvs=JSON.parse($scope.cv);
                    //$http.post('app/info.json', $scope.cv)
                }

            }])
        .filter('capitalize', function () {
            return function (input, scope) {
                if (input != null)
                    input = input;
                return input;
            }
        });
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
////////////////////////////////////

