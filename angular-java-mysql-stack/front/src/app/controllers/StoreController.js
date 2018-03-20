storeApp.controller('StoreController', ['$log', '$location', 'StoreService', function ($log, $location, StoreService) {
    var self = this;
    self.articles = [];
    StoreService.list().then( function (data) {
        self.articles = data;
    });

    /**
      * @name ajouter
      * @desc Ajouter un article
      * @param {Object} article - Nouvel article
      */
    this.ajouter = function () {
        StoreService.add(self.article).then( function() {
            // Aquittement
            self.articles.push(data);
        })
    };

    /**
      * @name supprimer
      * @desc Suppression d'un article
      * @param {Integer} articleId - ID article
      */
    this.supprimer = function (articleId) {
        StoreService.delete(articleId).then( function (data) {
            self.articles = data;
        });
    };

}]);