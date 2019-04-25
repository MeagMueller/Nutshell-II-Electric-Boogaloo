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

const articlesContainer = document.querySelector("#articles-container")

const articlesForms = {

    addNewArticleButton() {
        const articleHeader = document.createElement("h2")
        articleHeader.textContent = "Articles"
        articlesContainer.appendChild(articleHeader)

        const newButton = document.createElement("button")
        newButton.textContent = "Add Article"
        newButton.addEventListener("click", this.newArticle)
        articlesContainer.appendChild(newButton)

        const articlesFormSection = document.createElement("section")
        articlesFormSection.setAttribute("id", "articlesFormSection")
        articlesContainer.appendChild(articlesFormSection)
    },

    newArticleForm(eachArticle) {

        // builds fields for new article inputs and save button

        let newArticleFragment = document.createDocumentFragment()
        
        titleLabel = functions.createEachElement("label", "Title: ", "titleLabel")
        titleInput = functions.createEachElement("input", undefined, "titleInput")
        newArticleFragment.appendChild(titleLabel)
        newArticleFragment.appendChild(titleInput)
        
        synopsisLabel = functions.createEachElement("label", "Synopsis: ", "synopsisLabel")
        synopsisInput = functions.createEachElement("input", undefined, "synopsisInput")
        newArticleFragment.appendChild(synopsisLabel)
        newArticleFragment.appendChild(synopsisInput)

        urlLabel = functions.createEachElement("label", "Url: ", "urlLabel")
        urlInput = functions.createEachElement("input", undefined, "urlInput")
        newArticleFragment.appendChild(urlLabel)
        newArticleFragment.appendChild(urlInput)

        saveArticleButton = functions.createEachElement("button", "Save", "saveArticleButton")
        saveArticleButton.addEventListener("click", )
        newArticleFragment.appendChild(saveArticleButton)

    },

    buildNewArticle(eachNewArticle) {

        // Builds articles and appends to dom

        let buildFragment = document.createDocumentFragment()
        
        eachNewArticle.forEach(article => {

            const eachNewArticleTitle = functions.createEachElement("p", `${article.title}`, "articleTitle")
            const eachNewArticleSynopsis = functions.createEachElement("p", `${article.synopsis}`, "articleSynopsis")
            const eachNewArticleURL = ("p", `${article.url}`, "articleURL")


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

    articlesList() {

        // supposedly will list articles out
        
        if (articlesContainer.firstChild) {
            articlesContainer.appendChild(articlesForms.newArticle())
        } else {

        }
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


