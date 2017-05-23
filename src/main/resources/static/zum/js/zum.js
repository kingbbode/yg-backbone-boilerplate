let View = Backbone.View.extend({
    destroy(){
        this.undelegateEvents();
        this.$el.removeData().unbind();
        this.$el.empty();
    }
});
View.clazz = (name) => {
    return function(options){
        let view = View.extend(options);
        view.className = name;
        return view;
    }
};

let Router = Backbone.Router;
Router.clazz = (name) => {
    return function(options){
        let router = Router.extend(options);
        router.className = name;
        return router;
    }
};
let Collection = Backbone.Collection;
Collection.clazz = (name) => {
    return function(options){
        let collection = Collection.extend(options);
        collection.className = name;
        return collection;
    }
};
let Model = Backbone.Model;
Model.clazz = (name) => {
    return function(options){
        let model = Model.extend(options);
        model.className = name;
        return model;
    }
};

export default {
    View: View,
    Router : Router,
    Collection : Collection,
    Model : Model
};
