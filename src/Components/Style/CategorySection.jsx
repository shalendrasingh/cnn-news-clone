import React from 'react'
import { CategoryWrapper } from '../../Styles/ContainerStyles'

const CategorySection = ({img, desc, heading, category}) => {
    return (
        <CategoryWrapper>
            <div>
                <img src={img} alt={category}/>
            </div>
            <div>
                <p style={{color:"red"}}>{category}</p>
                <h1>{heading}</h1>
                <p style={{color:"grey"}}>{desc}</p>
            </div>
        </CategoryWrapper>
    )
}

export {CategorySection }
