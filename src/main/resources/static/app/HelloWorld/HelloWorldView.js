import template from "./template.hbs"
import Zum from "../../zum/js/zumcms"

export default Zum.View.clazz('HelloWorldView')({

    initialize(options) {
        this.message = 'hello world';
    },

    get events() {
        return {
            'click a': 'alert'
        };
    },

    render() {
        this.$el.html(
            template(
                {
                    message : this.message
                }
            )
        );
        return this;
    },

    alert() {
        alert(this.message);
    }
});

