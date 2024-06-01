import { routes } from './routes';
import { notFoundScene } from './scenes/not-Found/notFoundScene';

export function Router() {
    alert('soy el router')
    const path = window.location.pathname

    if (path === '/login') {
        if (localStorage.getItem('token')){
            navigateTo('/task')
            return
        }
    }
        
    

    const publicRoute = routes.public.find(route => route.path === path);
    const privateRoute = routes.private.find(route => route.path === path);
    if (publicRoute) {
        publicRoute.scene()
        return;
    }
    if (privateRoute) {
        if (localStorage.getItem('token')) {
            privateRoute.scene()
            return
        }
        navigateTo('/login');
        return;
    }
   

    navigateTo('/notFound')

}

export function navigateTo(path) {
    window.history.pushState({}, '', window.location.origin + path);
    Router()
}