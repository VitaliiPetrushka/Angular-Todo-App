import "./to-do.scss";


const TodoApp = {
   templateUrl: "to-do.html",
   controller: TodoController,
   controllerAs: "todo",
   selector: "todoApp"
};

function TodoController() {
   var controller = this;
   controller.user_to_add = undefined;
   controller.users = [];

   controller.handleAddUser = function () {
      controller.users.push(controller.user_to_add);
   };

   controller.handleDeleteUser = function (e) {
      var index = parseInt(e.target.parentElement.dataset.id);
      controller.users.splice(index, 1);
   };

   controller.handleEnterClick = function (e) {
      if (e.which == 13) {
         controller.handleAddUser(controller.user_to_add);
         controller.user_to_add = undefined;
      }
   };
}

export default TodoApp;