import { routes } from './routes';

export function Router() {
    alert('soy el router')
    const path = window.location.pathname

    const publicRoute = routes.public.path.find(route => route.path === path)
    console.log(publicRoute)
}