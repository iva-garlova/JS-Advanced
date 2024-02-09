function getArticleGenerator(articles) {
let articlesContent = Array.from(articles);
const contentRef = document.getElementById("content");

return () => {
    if(!articlesContent.length){
        return
    }
    let currArticleValue = articlesContent.shift();
    let newArticle = document.createElement("article");
    newArticle.textContent = currArticleValue;
    contentRef.appendChild(newArticle)

}

}
