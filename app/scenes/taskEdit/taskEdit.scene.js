import { navigateTo } from "../../Router"
import { fetchApi } from "../../helpers/fetch.api"

export function TaskEditScene() {
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
    `
    const logic = async () => {
        const params = window.location.search
        const taskId = new URLSearchParams(params).get('taskId')
        
        const title = document.getElementsByName('title')[0]
        const description = document.getElementsByName('description')[0]
        const select = document.getElementsByName('select')[0]
        const date = document.getElementsByName('date')[0]
        const form = document.querySelector('form')

        const dbTask = await fetchApi(`http://localhost:3000/task/${taskId}`)
        title.value = dbTask.title
        description.value = dbTask.description
        select.value = dbTask.select
        date.value = dbTask.date

        form.addEventListener('submit', async (e) => {
            e.preventDefault()
            
            await fetchApi(`http://localhost:3000/task/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title.value,
                    description: description.value,
                    select: select.value,
                    date: date.value
                })
            })
            navigateTo('/task')
        })
    }
      return {
            pageContent,
            logic
        }
}