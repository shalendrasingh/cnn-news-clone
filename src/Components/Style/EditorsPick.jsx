import React from 'react'
import { FloatingContainer, Wrapper } from '../../Styles/ContainerStyles'

const EditorsPick = () => {
    return (
        <Wrapper>
            <FloatingContainer>
                <p style={{color:"red"}}>Arts</p>
                <h2>Rosamund Pike in "I Care a Lot" and six more recommendations if you love an antiheroine</h2>
                <p style={{color:"grey"}}>By <strong>Jacqui Palumbo, CNN</strong></p>
            </FloatingContainer>
            <img style={{width:"80%", height:"450px", marginLeft:'20%'}} src="rosemund.jpg" alt="Rosamund"/>
        </Wrapper>
    )
}

export {EditorsPick}
