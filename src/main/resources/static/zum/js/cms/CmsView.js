import Zum from '../zum'
import NavView from './nav/NavView'
import BreadcrumbsView from './breadcrumbs/BreadcrumbsView'

export default Zum.View.clazz('CmsView')({
    el:'body',
    initialize(pages) {
        this.nav = new NavView(
            {
                el: '.nav-list',
                pages: pages || {}
            }
        );
        this.breadcrumbs = new BreadcrumbsView(
            {
                el: '#breadcrumbs'
            }
        );
        try{window.ace.settings.check('main-container' , 'fixed')}catch(e){}
    },
    select(page){
        this.nav.active(page);
        this.breadcrumbs.active(page);
        if(this.currentContainer){
            this.currentContainer.destroy();
        }
        this.currentContainer = new page.view({el:'#container'});
        this.render();
    },
    render(){
        this.currentContainer.render();
    }
});
