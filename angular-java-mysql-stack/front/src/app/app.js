var storeApp = angular.module('storeApp', ['ui.router', 'ui.bootstrap']);

// Configuration du logger
storeApp.config(['$logProvider', function ($logProvider) {
    $logProvider.debugEnabled(false); // Debug false
}]);

storeApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state( {
      name         : 'articles',
      url          : '/articles',
      templateUrl  : 'app/views/articles.html',
      controller   : 'StoreController',
      controllerAs : 'storeCtrl'
    });

    // Route par défaut : Ecran de Recherche
    $urlRouterProvider.otherwise('/articles');
}]);