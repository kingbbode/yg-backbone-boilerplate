import Zum from "../../../zum"
import template from "./template.hbs"
import NavItemView from '../item/NavItemView'

export default Zum.View.clazz('NavListView')(
{
    initialize(options) {
        this.data = {
            icon : options.page['icon'] ||'',
            text : options.page['text'] || ''
        };
        this.render();
        var that = this;
        _.each(options.page['sub'], function(page){
            var data = {
                el: that.$el.find('.submenu'),
                page: page
            };
            if(page['sub']){
                new NavListView(data)
                return;
            }
            new NavItemView(data);
        });
    },
    render() {
        this.$el.append(template(this.data));
        return this;
    }
});

