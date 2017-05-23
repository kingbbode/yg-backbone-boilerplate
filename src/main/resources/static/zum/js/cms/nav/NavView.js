import Zum from '../zum'
import NavItemView from './Item/NavItemView'
import NavListView from './List/NavListView'

export default Zum.View.clazz('NavView')({
    initialize(options) {
        _.each(options.pages, function(page){
            var data = {
                el: options.el,
                page: page
            };
            if(page['sub']){
                new NavListView(data);
                return;
            }
            new NavItemView(data);
        });
        try{window.ace.settings.check('sidebar' , 'fixed')}catch(e){}
        try{window.ace.settings.check('sidebar' , 'collapsed')}catch(e){}
    },
    active(selectGroup){

    }
});

