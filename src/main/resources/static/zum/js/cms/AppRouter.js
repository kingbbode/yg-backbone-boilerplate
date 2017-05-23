import AppView from './AppView'
import Zum from '../zum'

var invoke = function(pages, route, app){
    _.each(pages, function(page){
        if(page['sub']){
            invoke(page['sub'], route, app);
            return;
        }
        let move = function(){
            app.select(page);
        };
        _.each(page['path'], function(path){
            route[path] = move;
        });
    });
};

export default Zum.Router.clazz('AppRouter')({
    initialize(options){
        this.route = {};
        this.app = new AppView(options);
        invoke(options, this.route, this.app);
    },

    get routes(){
        return {
            '' : 'move',
            ':mod(/)': 'move'
        }
    },

    move(mod) {
        this.route[mod || '']();
    }
});