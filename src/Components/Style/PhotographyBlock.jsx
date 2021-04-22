import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {gitHubUserSearch} from '../../Redux/world/action'
import { Wrapper, PhotographyBlockContainer } from '../../Styles/ContainerStyles'

const PhotographyBlock = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.world, shallowEqual)
    console.log(data)
    React.useEffect(() => {
        dispatch(gitHubUserSearch())
    },[dispatch])
    return (
        <Wrapper>
            <h5 style={{color:"grey"}}>PHOTOGRAPHY . A GLOBAL VIEW</h5>
            <PhotographyBlockContainer>
            {data.slice(15,16).map(item => 
            <>
            <img src={item.urlToImage} alt="img"/>
            <h2>{item.title}</h2>
            <h4 style={{color:"grey"}}>By: {item.author}, CNN</h4>
            <h4 style={{color:"red"}}>Art</h4>
            </>)}

            </PhotographyBlockContainer>
        </Wrapper>
    )
}

export{PhotographyBlock}