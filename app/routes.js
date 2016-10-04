export default function ($routeProvider) {
   $routeProvider.when("/", {
      templateUrl: "./templates/pages/home.html"
   }).when("/contacts", {
      templateUrl: "./templates/pages/contacts.html"
   }).when("/about-me", {
      templateUrl: "./templates/pages/about-me.html"
   });
}
