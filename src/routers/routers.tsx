import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])