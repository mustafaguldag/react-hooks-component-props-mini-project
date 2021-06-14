import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    return(
        <main>
        {posts.map(article => <Article key={article.id} date={article.date} title={article.title} preview={article.preview} minutes={article.minutes}/>)} 

        </main>
        
    )
}

export default ArticleList;