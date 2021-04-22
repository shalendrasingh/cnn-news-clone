import React from 'react'
import { CategorySection } from './CategorySection'

const data = [
    {
        img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_534,c_fill,g_auto,h_300,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200813172035-world-class-style-logo.jpg" ,
        category: "Fashion" ,
        heading: "World Class Style",
        desc: "Spotlighting world class designers in cities around the world"
    },
    {
        img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_534,c_fill,g_auto,h_300,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201112170144-test-of-time-card.jpg" ,
        category: "Architecture" ,
        heading: "Test of Time",
        desc: "A new series exploring history's architectural treasure"
    },
    {
        img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_534,c_fill,g_auto,h_300,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190128181527-avant-garde-card.jpg" ,
        category: "Arts" ,
        heading: "Avant-Garde Africa",
        desc: "A new series showcasing innovators and creators working across art, design, music, film and fashion"
    }
]
const StyleCategory = () => {

    return (
        <>
        {data.map((item => <CategorySection {...item}/>))}
        </>
        
    )
}

export {StyleCategory}
