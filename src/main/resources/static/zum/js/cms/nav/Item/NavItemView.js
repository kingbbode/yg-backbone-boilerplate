import Zum from "../../../zum"
import template from "./template.hbs"

export default Zum.View.clazz('NavItemView')({
   
    initialize(options) {
        this.data = {
            path : '#' + _.last(options.page['path']) || '',
            icon : options.page['icon'] ||'',
            text : options.page['text'] || ''
        };
        this.render();

    },
    render() {
        this.$el.append(template(this.data));
        ace.util.bind()
        return this;
    }
});

