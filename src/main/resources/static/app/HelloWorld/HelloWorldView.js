import template from "./template.hbs"

export default class HelloWorldView extends Backbone.View
{
    constructor(options) {
        super(options)
    }

    initialize(options) {
        this.message = 'hello world';
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
                    message : this.message
                }
            )
        );
        return this;
    }

    alert() {
        alert(this.message);
    }
}

