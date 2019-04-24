// const articleEvents = {
//     newArticle: () => {

        
//         const articleTitle = document.getElementById("titleInput").value
//         const articleSynopsis = document.getElementById("synopsisInput").value
//         const articleURL = document.getElementById("urlInput").value

//         const eachArticleTitle = document.createElement("h3")
//         eachArticleTitle.innerHTML = `${articleTitle}`
//         postContainer.appendChild(eachArticleTitle)

//         const eachArticleSynopsis = document.createElement("p")
//         eachArticleSynopsis.innerHTML = `${articleSynopsis}`
//         postContainer.appendChild(eachArticleSynopsis)

//         const eachArticleURL = document.createElement("link")
//         eachArticleURL.setAttribute("href", link)
//         eachArticleURL.innerHTML = `${articleURL}`
//         postContainer.appendChild(eachArticleURL)
        
//     }
// }

// eachArticle.forEach(article => {
//     const newArticleContainer = createHTML.createHTML("section")

//     const articleTitle = createHTML.createHTML("h3", `${article.title}`, "articleTitle")
//     articleFragment.appendChild(articleTitle)

//     const articleSynopsis = createHTML.createHTML("p", `${article.synopsis}`, "articleSynopsis")
//     articleFragment.appendChild(articleSynopsis)

//     const articleURL = createHTML.createHTML("p", `${article.url}`, "articleURL")
//     articleFragment.appendChild(articleURL)

//     articlesContainer.appendChild(articleFragment)