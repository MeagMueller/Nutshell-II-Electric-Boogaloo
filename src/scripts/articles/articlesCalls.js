export default {
    getAllArticles() {
        return fetch(`http://localhost:8088`).then(response => response.json)
    }


}