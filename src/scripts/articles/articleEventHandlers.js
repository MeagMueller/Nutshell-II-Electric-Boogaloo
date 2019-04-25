import fetchCalls from "../callsManager"
import functions from "../functions"
import articlesForms from "../articles/articles"

const articleEventHandlers = {

    createArticle() {
        const title = document.getElementById("titleInput").value
        const synopsis = document.getElementById("synopsisInput").value
        const url = document.getElementById("urlInput").value

        const container = document.querySelector("#articles-section")
        functions.clearContainer(container)

        fetchCalls.postArticles(articlesForms.eachElement(title, synopsis, url)).then(() => getAllArticles()).then(response => {
            response.forEach(article => {
                fetchCalls.getAllArticles(article).then(resposne => {
                    articlesForms.articlesList(response)
                })
            })
        })
    },

    editHandler() {
        let articleToEditId = event.target.id
        const articleEditing = articleToEditId.split("--")[1]

        const container = document.querySelector("#articles-section")
        functions.clearContainer(container)

        fetchCalls.getAllArticles(articleEditing).then(editedInfo => {
            // container.appendChild((thing that I am building on articles.js to create articles).editArticleForm(editedInfo))
        })

    },

    updateHandler() {
        let articleToUpdate = event.target.previousSibling.id
        const articleUpdating = articleToUpdate.split("--")[1]

    },

    deleteHandler() {
        console.log(event.target.id)
    }
}

