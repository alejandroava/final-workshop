import styles from './notFoundStyles.css'

export function notFoundScene() {
    const root = document.getElementById('root')
    root.innerHTML = `
    <div class='${styles.container}'>
        <h1> No found Scene </h1>
        <p> Error 404 </p>
    </div>
    `;
}