import AppView from './AppView'

class AppRouter extends Backbone.Router {
    get routes() {
        return {
            "" : "homeRoute"
        };
    }

    homeRoute() {
        new AppView();
    }
}

new AppRouter();
Backbone.history.start();