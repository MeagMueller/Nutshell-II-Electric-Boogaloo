import fetchCalls from "../callsManager"
import factoryFunctions from "../factoryFunctions"

const articleEventHandlers = {
    editHandler = () => {
        let articleToEditId = event.target.id
        const articleEditing = articleToEditId.split("--")[1]

        const container = document.querySelector("#articles-section")
        factoryFunctions.clearContainer(container)

        fetchCalls.getAllArticles(articleEditing).then(editedInfo => {
            // container.appendChild((thing that I am building on articles.js to create articles).editArticleForm(editedInfo))
        })

    },

    updateHandler = () => {
        let articleToUpdate = event.target.previousSibling.id
        const articleUpdating = articleToUpdate.split("--")[1]

    }
}

