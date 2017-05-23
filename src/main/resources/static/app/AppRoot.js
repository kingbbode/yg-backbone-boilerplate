import AppRouter from '../zum/js/AppRouter'
import HelloWorldView from './HelloWorld/HelloWorldView'

export default class AppRoot
{
    start(navInfo){
        new AppRouter(navInfo);
        Backbone.history.start();
    }
}

new AppRoot().start(
    [
        {
            path : ["","index"],
            icon : 'fa-copyright',
            text : 'Home2222',
            view : HelloWorldView,
            description : "홈홈홈"
        },
        {
            icon : 'fa-pencil-square-o',
            text : 'Other',
            sub :
                [
                    {
                        path: ["1"],
                        icon: 'fa-desktop',
                        text: 'TEST1',
                        view: HelloWorldView,
                        description : "TEST11"
                    },
                    {
                        path: ["2"],
                        icon: 'fa-list',
                        text: 'TEST2',
                        view: HelloWorldView,
                        description : "TEST22"
                    }
                ]
        },
        {
            icon : 'fa-pencil-square-o',
            text : 'Other',
            sub :
                [
                    {
                        path: ["3"],
                        icon: 'fa-tag',
                        text: 'TEST3',
                        view: HelloWorldView,
                        description : "TEST33"
                    },
                    {
                        path: ["4"],
                        icon: 'fa-copyright',
                        text: 'TEST4',
                        view: HelloWorldView,
                        description : "TEST44"
                    }
                ]
        },
        {
            path : ["5"],
            icon : 'fa-copyright',
            text : 'TEST5',
            view : HelloWorldView,
            description : "TEST55"
        }
    ]
);