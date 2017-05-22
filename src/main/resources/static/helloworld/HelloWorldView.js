import template from "./template.hbs"

export default class HelloWorldView extends Backbone.View
{
    constructor(options) {
        //element binding
        console.log('options', options);
        super(options)
    }

    initialize(options) {
        //class variable setting
        //class variable event binding
        this.customMessage = options.message;
        this.message = 'hello world';
        this.custom = this.$el.data('msg');
        console.log('initialize', this.$el);
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
                    message : this.message + " (custom11:" + this.customMessage + ")",
                    custom: this.custom
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

