const AdminRoutes = [
    {
        path     : '/dashboard',
        name     : 'AdminDashboard',
        component: () => import('./pages/Dashboard'),
        meta     : {
            title: 'Admin Dashboard'
        }
    },
    // ===========User Routing===============
    {
        path     : 'user/list',
        name     : 'UserList',
        component: () => import('./pages/user/Index'),
        meta     : {
            title: 'User List'
        }
    },
    {
        path     : 'user/create',
        name     : 'UserCreate',
        component: () => import('./pages/user/Create'),
        meta     : {
            title: 'User Create'
        }
    },
    {
        path     : 'user/edit/:id',
        name     : 'UserEdit',
        component: () => import('./pages/user/Create'),
        meta     : {
            title: 'User Edit'
        }
    },

];

export default AdminRoutes;
