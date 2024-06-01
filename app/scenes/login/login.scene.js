import { navigateTo } from "../../Router.js"
import { decryptData } from "../../helpers/encrypt.js"
import { fetchApi } from "../../helpers/fetch.api.js"

export function LoginScene() {
    const root = document.getElementById('root')
    root.innerHTML = `
    <form>
        <input type = 'email' placeholder = 'email@deejemplo.com' autocomplete = 'email'>
        <input type = 'password' placeholder = 'ingrese tu contraseña'>
        <button type = 'submit'>Entrar</button> 
    </form>
    `

    const $emailHTML = root.querySelector("input[type='email']")
    const $passwordHTML = root.querySelector("input[type='password']")
    const $myForm = root.getElementsByTagName('form')[0]
    
    $myForm.addEventListener('submit', async e => {
        e.preventDefault()

        if (!$emailHTML.value || !$passwordHTML.value) {
            alert('Ingrese todos los campos')
        }
        const users = await fetchApi('http://localhost:3000/users')
        const user = users.find(user => user.email === $emailHTML.value && decryptData(user.password) === $passwordHTML.value)
        if (user) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem('token', token)
            navigateTo('/task')
        }

    })
}