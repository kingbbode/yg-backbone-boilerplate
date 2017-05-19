import HelloWorldView from './helloworld/HelloWorldView'

export default class AppView extends Backbone.View
{
    constructor(options) {
        super(options);
    }

    initialize() {
        this.first = new HelloWorldView({
            el : this.$el.find('#first'),
            message : 'first'
        });
        this.second = new HelloWorldView({
            el : this.$el.find('#second'),
            message : 'second'
        });
    }
}