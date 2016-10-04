import angular from "angular";
import TodoApp from "./to-do/to-do.js";
import TodoItem from "./to-do/to-do-item";
import UsersService from "../services/UsersService";

angular.module("home", [])
.service(UsersService.selector, UsersService.controller)
.component(TodoApp.selector, TodoApp)
.component(TodoItem.selector, TodoItem);


