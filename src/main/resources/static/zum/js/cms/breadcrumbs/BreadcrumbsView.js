import Zum from '../../zum'

import template from "./template.hbs"

export default Zum.View.clazz('BreadcrumbsView')({
    render() {
        this.$el.html(template(this.data));
        try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){}
        return this;
    },
    active(page) {
        this.data = page
        this.render();
    }
});

