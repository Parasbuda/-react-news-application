import React, { useState, useEffect } from "react"
import "./App.css"
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from "./component/NewsCards/NewsCards"

const alanKey =
  "2b6bb9e355e256c7962d952f851c8a5b2e956eca572e1d8b807a3e2338fdd0dc/stage"

const App = () => {
  const [newsArticles, setNewsArticles] = useState([])
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles)
        }
      },
    })
  }, [])
  return (
    <div>
      <h1>Alan news app</h1>
      <NewsCards articles={newsArticles} />
    </div>
  )
}

export default App
