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
import articlesCalls from "./articlesCalls"
import factoryFunctions from "../factoryFunctions"

const articlesContainer = document.querySelector("#articles-section")

const articlesForms = {
    newArticle = (eachArticle) => {
        let newArticleFragment = document.createDocumentFragment()
        
        titleLabel = factoryFunctions.createEachElement("label", "Title: ", "titleLabel")
        titleInput = factoryFunctions.createEachElement("input", undefined, "titleInput")
        newArticleFragment.appendChild(titleLabel)
        newArticleFragment.appendChild(titleInput)
        
        synopsisLabel = factoryFunctions.createEachElement("label", "Synopsis: ", "synopsisLabel")
        synopsisInput = factoryFunctions.createEachElement("input", undefined, "synopsisInput")
        newArticleFragment.appendChild(synopsisLabel)
        newArticleFragment.appendChild(synopsisInput)

        urlLabel = factoryFunctions.createEachElement("label", "Url: ", "urlLabel")
        urlInput = factoryFunctions.createEachElement("input", undefined, "urlInput")
        newArticleFragment.appendChild(urlLabel)
        newArticleFragment.appendChild(urlInput)

        saveArticleButton = factoryFunctions.createEachElement("button", "Save", "saveArticleButton")
        saveArticleButton.addEventListener("click", )
        newArticleFragment.appendChild(saveArticleButton)




    },

    editArticleForm = (eachArticle) => {
        let editFragment = document.createDocumentFragment()

        editFragment.appendChild(factoryFunctions.createEachElement("label", "Title: ", undefined))
        const titleInput = factoryFunctions.createEachElement("input", undefined, `Edit-Article-Title--${eachArticle.id}`)
        titleInput.value = eachArticle.title
        editFragment.appendChild(titleInput)

        editFragment.appendChild(factoryFunctions.createEachElement("label", "Synopsis: ", undefined))
        const synopsisInput = factoryFunctions.createEachElement("input", undefined, `Edit-Article-Synopsis--${eachArticle.id}`)
        synopsisInput.value = eachArticle.synopsis
        editFragment.appendChild(synopsisInput)

        editFragment.appendChild(factoryFunctions.createEachElement("label", "URL: ", undefined))
        const urlInput = factoryFunctions.createEachElement("input", undefined, `Edit-URL--${eachArticle.id}`)
        urlInput.value = eachArticle.url
        editFragment.appendChild(urlInput)

    }
}


