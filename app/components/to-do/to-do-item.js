import "./to-do-item.scss";
import "../../services/UsersService";

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
      UsersService.deleteUser(controller.user._id.valueOf());
   };
   controller.handleEditMode = function () {
     controller.edit = !controller.edit;
   };
   controller.handleEditApply = function () {
      console.log(controller.user_edit);
      controller.edit = !controller.edit;
   };
}

export default TodoItem;