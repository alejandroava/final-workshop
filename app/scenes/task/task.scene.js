import { fetchApi } from "../../helpers/fetch.api"
export function TaskScene() {
    const pageContent = `
    <form>
        <h1>Tareas</h1>
        <input type="text" placeholder="Titulo de la tarea" name="title">
        <input type="text" placeholder="Descripcion" name="description">
        <select name='select'>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
        </select>
        <input type="date" name="date">
        <button type="submit">Guardar tarea</button>
    </form>
    <div id='taskContainer'></div>

    `
    const logic = async () => {
        const $myFormTask = document.getElementsByTagName('form')[0]
        const allTask = document.getElementById('taskContainer')

        const showTask = await fetchApi('http://localhost:3000/tasks') 
        showTask.forEach(task => {
            allTask.innerHTML += `
            <p>${task.title}</p>
            <button>Editar</button>
            <button>Eliminar</button>
            <button>Vista Previa</button>
            `

        });

        $myFormTask.addEventListener('submit', async e => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const title = formData.get('title')
            const description = formData.get('description')
            const select = formData.get('select')
            const date = formData.get('date')

            


            const taskCreated = await fetchApi('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    select,
                    date,
                })
            })
       })
    }
    return {
        pageContent,
        logic
    }
   
}