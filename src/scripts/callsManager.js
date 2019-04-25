const url = "http://localhost:8088"

const fetchCalls = {
    getAllArticles() {
        return fetch(`${url}/articles`).then(response => response.json())
    }, 

    postArticles() {
        return fetch(`${url}/articles`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        }).then(response => response.json())
    },

    deleteArticles(id) {
        return fetch(`${url}/articles/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    }
}

export default fetchCalls