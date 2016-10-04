import "./to-do.scss";

const TodoApp = {
   templateUrl: "./components/to-do/to-do.html",
   controller: TodoController,
   controllerAs: "todo",
   selector: "todoApp"
};

function TodoController(UsersService) {
   var controller = this;
   controller.users = undefined;
   UsersService.getUsers().then(function (data) {
      controller.users = data;
   });
   controller.user_to_add = undefined;

   controller.handleAddUser = function () {
      if(controller.user_to_add.trim()) {
         UsersService.addUser(controller.user_to_add);
         controller.user_to_add = undefined;
      }
   };

   //controller.handleDeleteUser = function (e) {
   //   var   index = parseInt(e.target.parentElement.dataset.id),
   //         _id = controller.users[index]._id.valueOf();
   //   UsersService.deleteUser(_id);
   //};

   controller.handleEnterClick = function (e) {
      if (e.which == 13 && controller.user_to_add) {
         UsersService.addUser(controller.user_to_add);
         controller.user_to_add = undefined;
      }
   };
}

export default TodoApp;