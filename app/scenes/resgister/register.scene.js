import styles from './register.styles.css'
export function RegisterScene() {
    const root = document.getElementById('root')
    root.innerHTML = `
     <form class='${styles.myForm}'>
        <input type = 'text' placeholder = 'ingresa tu nombre'>
        <input type = 'email' placeholder = 'email@deejemplo.com' autocomplete = 'email'>
        <input type = 'password' placeholder = 'ingrese tu contraseña'>
        <button type = 'submit'>Registrarse</button> 
    </form>
    `
    const $nameHTML = root.querySelector("input[type='text']")
    const $emailHTML = root.querySelector("input[type='email']")
    const $passwordHTML = root.querySelector("input[type='password']")

    const $myRegister = root.getElementsByTagName('form')[0]
    $myRegister.addEventListener('submit', e => {
        e.preventDefault()

        if (!$emailHTML.value || !$passwordHTML.value || !$nameHTML) {
            alert('Ingrese todos los campos')
        }
        console.log($emailHTML.value)

    })
}