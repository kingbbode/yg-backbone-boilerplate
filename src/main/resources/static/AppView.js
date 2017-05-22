import HelloWorldView from './helloworld/HelloWorldView'

export default class AppView extends Backbone.View
{
    constructor(options) {
        var op = _.extend(options || {}, {el:'body'});
        console.log('op', op);
        super(op);
    }

    initialize() {
        _.each(this.$('.first'), function(el){
            console.log('el', el);
            new HelloWorldView({
                el : $(el),
                message : 'first'
            }); 
        }) ;
        this.second = new HelloWorldView({
            el : this.$('#second'),
            message : 'second'
        });
    }
}