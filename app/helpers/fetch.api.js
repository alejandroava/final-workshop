export async function fetchApi(url,options) {
    try {
        const res = await fetch(url,options)
        const data = await res.json()
        return data
    } catch (error) {
        alert('Ocurrio un error con la promesa', error)
    }
}