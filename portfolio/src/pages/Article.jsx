import React, { useEffect }from 'react'
import { Helmet } from "react-helmet"
import myArticles from '../data/article'


const Article = () => {
  return (

    <Helmet>
      <title>{`Articles | ${Article.title}`}</title>
    </Helmet>




  )
}

export default Article