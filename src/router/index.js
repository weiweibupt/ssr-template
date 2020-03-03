import Vue from 'vue'
import Router from 'vue-router'
import Bar from '../components/Bar.vue'
import Foo from '../components/Foo.vue'
import Cc from '../components/Cc.vue'
import Dd from '../components/Dd.vue'

Vue.use(Router)

export function createRouter(){
    return new Router({
        mode:'history',
        routes:[
            {
                path: '/index',
                redirect:'/bar'
            }   ,
            {
                path: '/bar',
                name: 'Bar',
                component: Bar,
                children:[
                    {
                        path:'cc',
                        name:'cc',
                        component:Cc
                    },
                    {
                        path:'dd',
                        name:'dd',
                        component:Dd
                    }
                ]
            },
            {
                path: '/foo',
                name: 'Foo',
                component: Foo
            }   
        ]
    })
}