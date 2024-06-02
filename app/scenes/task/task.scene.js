export function TaskScene() {
    const pageContent = `
        <div>
        <hi>Vista de tareas</h1>
        <ul>
            <li>Tarea 1</li>
            <li>Tarea 2</li>
            <li>Tarea 3</li>
        </ul>

    </div>
    `
    const logic = () => {
        console.log('hola desde task')
    }
    return {
        pageContent,
        logic
    }
   
}