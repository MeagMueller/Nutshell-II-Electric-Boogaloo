import callManager from "../scripts/callsManager"
import buildHTML from "../scripts/articles/articles"

buildHTML.articlesForms.addNewArticleButton()

callManager.getAllArticles().then(response => {
    buildHTML.buildNewArticle(response)
})
console.log("Testing")

