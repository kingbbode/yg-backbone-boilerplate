import template from "./template.hbs"

export default class HelloWorldView extends Backbone.View
{
    constructor(options) {
        //element binding
        super(options)
    }

    initialize(options) {
        //class variable setting
        //class variable event binding
        this.customMessage = options.message;
        this.message = 'hello world';
        this.render();
    }

    get events() {
        return {
            'click a': 'alert'
        };
    }

    render() {
        this.$el.html(
            template(
                {
                    message : this.message + "(" + this.customMessage + ")"
                }
            )
        );
        return this;
    }

    alert() {
        alert(this.message);
        alert(this.customMessage);
    }
}

