import User from './components/user/User.vue'
import UserDetail from './components/user/UserDetail.vue'
import Home from './components/Home.vue'

export const routes = [
    { 
        path: '/',
        component: Home,
        name: 'home'
    },
    { 
        path: '/user',
        component: User,
        children: [
            {
                path: ':id',
                component: UserDetail,
                name: 'userDetail'
            }
        ]
    },
    { 
        path: '*',
        redirect: { name: 'home'}
    },
]