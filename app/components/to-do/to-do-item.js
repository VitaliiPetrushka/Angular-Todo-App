const TodoItem = {
   templateUrl: "./components/to-do/to-do-item.html",
   controller: TodoItemController,
   controllerAs: "todoItem",
   selector: "todoItem",
   bindings: {
      user: "<"
   }
};

function TodoItemController(UsersService) {
   var controller = this;
   controller.edit = false;
   controller.user_edit = undefined;

   controller.handleDeleteUser = function () {

   };
   controller.handleEditMode = function () {
     controller.edit = !controller.edit;
   };
   controller.handleEditApply = function () {
      //do some stuff
      controller.edit = !controller.edit;
   };
}

export default TodoItem;