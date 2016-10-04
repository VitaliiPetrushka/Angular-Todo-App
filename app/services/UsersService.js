const UsersService = {
   controller: UsersServiceController,
   selector: "UsersService"
};

function UsersServiceController($http, $q) {

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

   this.editUser = function(id, body) {
      $http.post("/api/users/" + id, {
         name: body
      });
   }
}

UsersService.inject = ["$http", "$q"];

export default UsersService;

