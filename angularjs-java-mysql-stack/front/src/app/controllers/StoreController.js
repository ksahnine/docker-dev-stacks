storeApp.controller('StoreController', ['$log', '$location', 'StoreService', function ($log, $location, StoreService) {
    var self = this;
    self.articles = [];

    /**
      * @name ajouter
      * @desc Ajouter un article
      * @param {Object} article - Nouvel article
      */
    self.ajouter = function () {
        StoreService.add(self.article).then( function(data) {
            // Aquittement
            self.list();
        })
    };

    /**
      * @name supprimer
      * @desc Suppression d'un article
      * @param {Integer} articleId - ID article
      */
    self.supprimer = function (articleId) {
        StoreService.delete(articleId).then( function (data) {
            self.list();
        });
    };

    /**
      * @name list
      * @desc Liste de tous les articles
      */
    self.list = function () {
        StoreService.list().then( function (data) {
            self.articles = data;
        });
    };

    // init
    self.list();

}]);