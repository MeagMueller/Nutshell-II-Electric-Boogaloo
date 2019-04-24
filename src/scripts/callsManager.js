const url = "http://localhost:8088"

export default fetchCalls = {
    getAllArticles: () => {
        return fetch(`${url}/articles`).then(response => response.json())
    }, 

    postArticles: () => {
        return fetch(`${url}/articles`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        }).then(response => response.json())
    },
}