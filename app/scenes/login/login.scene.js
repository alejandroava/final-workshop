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
    
    $myForm.addEventListener('submit', e => {
        e.preventDefault()

        if (!$emailHTML.value || !$passwordHTML.value) {
            alert('Ingrese todos los campos')
        }
        console.log($emailHTML.value)

    })
}