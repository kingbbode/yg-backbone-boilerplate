import Backbone from 'backbone';

export default class TestView extends Backbone.View
{
    constructor(options) {
        super(options);
    }

    initialize() {
    }

    get events() {
        return {
            'click a': 'alert'
        }
    }


    alert() {
        alert('hello world');
    }
}