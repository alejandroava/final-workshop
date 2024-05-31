import { routes } from './routes';
import { notFoundScene } from './scenes/not-Found/notFoundScene';

export function Router() {
    alert('soy el router')
    const path = window.location.pathname

    const publicRoute = routes.public.find(route => route.path === path);
    if (publicRoute) {
        publicRoute.scene()
        return;
    }

    navigateTo('/notFound')

}

export function navigateTo(path) {
    window.history.pushState({}, '', window.location.origin + path);
    Router()
}