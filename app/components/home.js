import angular from "angular";
import TodoApp from "./to-do/to-do.js";
import TodoItem from "./to-do/to-do-item";

angular.module("home", [])
.service("UsersService", ["$http", "$q", function($http, $q) {

   this.getUsers = function() {
      var deferred = $q.defer();
      $http.get("api/users/")
      .then(function(response) {
         deferred.resolve(response.data);
      }, function (error) {
         console.log(error);
      });
      return deferred.promise;
   };

   this.addUser = function (new_user) {
      if(new_user) {
         $http.post("/api/users/", {
            name: new_user
         });
      }
   };

   this.deleteUser = function (id) {
      $http.delete("/api/users/" + id);
   };
}])
.component(TodoApp.selector, TodoApp)
.component(TodoItem.selector, TodoItem);


