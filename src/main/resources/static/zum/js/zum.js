let View = Backbone.View.extend({
    destroy(){
        this.undelegateEvents();
        this.$el.removeData().unbind();
        this.$el.empty();
    }
});
View.clazz = (name) => {
    let clazz = {};
    clazz[name] = null;
    return function(option){
        clazz[name] = View.extend(option);
        return clazz;
    }
};

let Router = Backbone.Router;
Router.clazz = (name) => {
    let clazz = {};
    clazz[name] = null;
    return function(option){
        clazz[name] = Router.extend(option);
        return clazz;
    }
};
let Collection = Backbone.Collection;
Collection.clazz = (name) => {
    let clazz = {};
    clazz[name] = null;
    return function(option){
        clazz[name] = Collection.extend(option);
        return clazz;
    }
};
let Model = Backbone.Model;
Model.clazz = (name) => {
    let clazz = {};
    clazz[name] = null;
    return function(option){
        clazz[name] = Model.extend(option);
        return clazz;
    }
};

export default {
    View: View,
    Router : Router,
    Collection : Collection,
    Model : Model
};