import angular from "angular";
import TodoApp from "./to-do/to-do";

const app = angular.module("todo", []);

app.component(TodoApp.selector, TodoApp);
