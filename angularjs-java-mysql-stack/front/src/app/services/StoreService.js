storeApp.factory("StoreService", [ "$http", "$log", function ($http, $log) {
    var storeService = {
        list: function () {
            return $http.get('/api/store/articles')
                        .then(function (r) {
                            return r.data;
                        }, function (error) {
                            $log.error("Erreur de recuperation des articles : " + error);
                        });
        },
        add: function (article) {
            return $http.post('/api/store/articles', article)
                        .then(function (r) {
                            return r.data;
                        }, function (error) {
                            $log.error("Erreur de creation : " + error);
                        });
        },
        delete: function (articleId) {
            return $http.delete('/api/store/articles/' + articleId)
                        .then(function (r) {
                            return r.data;
                        }, function (error) {
                            $log.error("Erreur de suppression : " + error);
                        });
        }
    }
    return storeService;
}]);