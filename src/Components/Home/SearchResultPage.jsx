import React from 'react'
import { News } from '../../Styles/SearchPage'

const SearchResultPage = ({urlToImage, title, description, publishedAt}) => {
    return (
        <News>
            <div>
                <img src={urlToImage} alt={publishedAt}/>
            </div>
            <div>
                <h2>{title}</h2>
                <h5>Mar 10 2021</h5>
                <p>{description}
                </p>
            </div>
        </News>
    )
}

export {SearchResultPage}
