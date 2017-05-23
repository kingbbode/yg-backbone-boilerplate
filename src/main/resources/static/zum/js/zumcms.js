import Common from "./zum"
import CmsRouter from "./cms/CmsRouter"

class Cms {
    start(pages){
        new CmsRouter(pages);
        Backbone.history.start()
    }
}

export default _.extend(Common,{
    Cms : Cms
});