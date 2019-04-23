const url = "http://localhost:8088"

export default fetchCalls = {
    getAllArticles = () => {
        return fetch(`${url}/articles`).then(response => response.json())
    }
}