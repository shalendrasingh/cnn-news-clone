import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getData } from '../../Redux/styles/action'
import { FlexBox, Wrapper } from '../../Styles/ContainerStyles'

const RandomNewsBlock = ({start, end}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const data = useSelector((state) => state.style.data,shallowEqual)

    React.useEffect(() => {
        dispatch(getData())
    },[dispatch])
    
    const handleClick = (id) => {
        history.push(`./style/${id}`)
    }
    return (
        <FlexBox>
            {data.slice(start,end).map((item) => 
            <>
            <div onClick={(e) => handleClick(item.publishedAt)}>
                <div>
                    <img src={item.urlToImage} alt=""/>
                </div>
                <h3>{item.title}</h3>
                <p>By <strong>{item.author}, CNN</strong></p>
            </div>
            </>)}
        </FlexBox>
    )
}

export default RandomNewsBlock
