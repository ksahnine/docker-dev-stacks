storeApp.factory("StoreService", [ "$http", "$log", function ($http, $log) {
    var storeService = {
        list: function () {
            return $http.get('/store/articles')
                        .then(function (r) {
                            return r.data;
                        }, function (error) {
                            $log.error("Erreur de recuperation des articles : " + error);
                        });
        },
        add: function (article) {
            return $http.post('/store/articles')
                        .then(function (r) {
                            return r.data;
                        }, function (error) {
                            $log.error("Erreur de creation : " + error);
                        });
        }
    }
    return storeService;
}]);