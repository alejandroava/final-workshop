import { navigateTo } from '../../Router'
import styles from './navbar.layout.styles.css'
export function NavbarLayout(pageContent, logic) {
    const root = document.getElementById('root')

    root.innerHTML = `
        <nav class='${styles.navbar}'>
            <ul class='${styles.navbar_list}'>
                <li>Profile</li>
                <li>User</li>
                <li><button id ='logout' class='${styles.logout}'>Logout</button></li>
            <ul>
        </nav>
        ${pageContent}
    `
    logic()
    const $logout = document.getElementById('logout')
    $logout.addEventListener('click', () => {
        localStorage.removeItem('token')
        navigateTo('/login') 
    })
}