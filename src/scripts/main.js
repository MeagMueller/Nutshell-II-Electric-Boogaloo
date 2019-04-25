import callManager from "../scripts/callsManager"
import buildHTML from "../scripts/articles/articles"
import functions from "../scripts/functions"

buildHTML.articleHeader()

buildHTML.addNewArticleButton()

callManager.getAllArticles().then(response => {
    buildHTML.buildNewArticle(response)
})
console.log("Testing")

