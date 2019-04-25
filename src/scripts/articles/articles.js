// user wants to record a news article
// click affordance (button) 
// present form with news title, synopsis, and url

// once fields are entered, save article (button)
// saved to database, assigned to user
// timestamp

// saved news articles, news should be presented in news components, sorted by date in descending order
// each article should have a delete function 

// user wants to change details, edit functionality 
// prefilled form should populate
// new save
import articlesCalls from "../callsManager"
import functions from "../functions"
import articleEventHandlers from "../articles/articleEventHandlers"
import fetchCalls from "../callsManager";

const articlesContainer = document.querySelector("#articles-container")

const articlesForms = {

    articleHeader() {
        const articleHeader = document.createElement("h2")
        articleHeader.textContent = "Articles"
        articlesContainer.appendChild(articleHeader)
    },

    addNewArticleButton() {
        
        const newButton = document.createElement("button")
        newButton.textContent = "Add Article"
        newButton.addEventListener("click", this.newArticleForm)
        articlesContainer.appendChild(newButton)

        const articlesFormSection = document.createElement("section")
        articlesFormSection.setAttribute("id", "articlesFormSection")
        articlesContainer.appendChild(articlesFormSection)
    },

    newArticleForm() {

        // builds fields for new article inputs and save button

        let newArticleFragment = document.createDocumentFragment()
        
        const titleLabel = functions.createEachElement("label", "Title: ", "titleLabel")
        const titleInput = functions.createEachElement("input", undefined, "titleInput")
        newArticleFragment.appendChild(titleLabel)
        newArticleFragment.appendChild(titleInput)
        
        const synopsisLabel = functions.createEachElement("label", "Synopsis: ", "synopsisLabel")
        const synopsisInput = functions.createEachElement("input", undefined, "synopsisInput")
        newArticleFragment.appendChild(synopsisLabel)
        newArticleFragment.appendChild(synopsisInput)

        const urlLabel = functions.createEachElement("label", "Url: ", "urlLabel")
        const urlInput = functions.createEachElement("input", undefined, "urlInput")
        newArticleFragment.appendChild(urlLabel)
        newArticleFragment.appendChild(urlInput)

        const inputValues = {
            title: titleInput.value,
            synopsis: synopsisInput.value,
            url: urlInput.value
        }

        const saveArticleButton = functions.createEachElement("button", "Save", "saveArticleButton")
        saveArticleButton.textContent = "Save"
        saveArticleButton.addEventListener("click", () => {
            articlesForms.buildNewArticle().then(() => {
                fetchCalls.postArticles(inputValues)
            })
        })
        newArticleFragment.appendChild(saveArticleButton)
        articlesContainer.appendChild(newArticleFragment)

    },

    buildNewArticle(eachNewArticle) {

        // Builds articles and appends to dom

        let buildFragment = document.createDocumentFragment()
        
        eachNewArticle.forEach(article => {

            const eachNewArticleTitle = functions.createEachElement("p", `${article.title}`, "articleTitle")
            const eachNewArticleSynopsis = functions.createEachElement("p", `${article.synopsis}`, "articleSynopsis")
            const eachNewArticleURL = functions.createEachElement("p", `${article.url}`, "articleURL")


            const editButton = functions.createEachElement("button", "Edit", `edit-button--${article.id}`)
            editButton.addEventListener("click", articleEventHandlers.editHandler)

            const deleteButton = functions.createEachElement("button", "Delete", `delete-button--${article.id}`)
            deleteButton.addEventListener("click", articlesCalls.deleteArticles)

            buildFragment.appendChild(eachNewArticleTitle)
            buildFragment.appendChild(eachNewArticleSynopsis)
            buildFragment.appendChild(eachNewArticleURL)
            buildFragment.appendChild(editButton)
            buildFragment.appendChild(deleteButton)
        })
            articlesContainer.appendChild(buildFragment)
    },


    editArticleForm(eachArticle) {

        // form for editing articles

        let editFragment = document.createDocumentFragment()

        editFragment.appendChild(functions.createEachElement("label", "Title: ", undefined))
        const titleInput = functions.createEachElement("input", undefined, `Edit-Article-Title--${eachArticle.id}`)
        titleInput.value = eachArticle.title
        editFragment.appendChild(titleInput)

        editFragment.appendChild(functions.createEachElement("label", "Synopsis: ", undefined))
        const synopsisInput = functions.createEachElement("input", undefined, `Edit-Article-Synopsis--${eachArticle.id}`)
        synopsisInput.value = eachArticle.synopsis
        editFragment.appendChild(synopsisInput)

        editFragment.appendChild(functions.createEachElement("label", "URL: ", undefined))
        const urlInput = functions.createEachElement("input", undefined, `Edit-URL--${eachArticle.id}`)
        urlInput.value = eachArticle.url
        editFragment.appendChild(urlInput)

        const editedArticleButton = functions.createEachElement("button", "Save Edit", "editedArticleButton")
        editedArticleButton.addEventListener("click", () => {
            articleEventHandlers.updateHandler()
        })

        editFragment.appendChild(editedArticleButton)

        return editedFragment
    }
}

export default articlesForms
