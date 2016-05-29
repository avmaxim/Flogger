(function (window) {
    "use strict";

    var FLOGGER_HOST_URL = window.location.protocol + "//" + window.location.host;

    var ROUTE_URLS = {
        ACCOUNT_LOGIN: FLOGGER_HOST_URL + "/account/login",
        ACCOUNT_REGISTER: FLOGGER_HOST_URL + "/account/register",
        USERS_SHOWUP: FLOGGER_HOST_URL + "/entities/users",
        ARTICLES_SHOWUP: FLOGGER_HOST_URL + "/entities/articles",
    };

    angular.module("floggerApp").constant("urls", ROUTE_URLS);

})(window);