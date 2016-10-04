import angular from "angular";
import "angular-route";
import Routes from "./routes";
import "./components/home";
import "./index.scss";

let app = angular.module("app", ["home", "ngRoute"]);

app.config(["$routeProvider", Routes]);

app.controller("appController", function() {
   var controller = this;
   controller.active_link = 1;
   controller.linkIsActive = function(link) {
      return controller.active_link === link;
   };
   controller.activateLink = function (link) {
     controller.active_link = link;
   }
});