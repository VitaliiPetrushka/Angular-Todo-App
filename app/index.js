import angular from "angular";
import "angular-route";
import Routes from "./routes";
import "./components/index";
import "./index.scss";

let app = angular.module("app", ["todo", "ngRoute"]);

app.config(["$routeProvider", Routes]);

