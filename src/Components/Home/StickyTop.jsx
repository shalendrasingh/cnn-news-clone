import axios from 'axios'
import React from 'react'
import { Input } from '../../Styles/Footer'
import { Categories, News, NewsContainer, SearchButton, SearchContainer, StickyBar, StoryType, Top } from '../../Styles/SearchPage'
import { SearchResultPage } from './SearchResultPage'
import {BsSearch} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { getSearchData } from '../../Redux/SearchPage/action'
// import { Pagination } from './Pagination'

const StickyTop = () => {
    const [input , setInput] = React.useState(" ")
    // const [start, setStart] = React.useState(0)
    // const [end, setEnd] = React.useState(5)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.search.data)
    const handleClick = () => {
        dispatch(getSearchData(input))
    }


    return (
        <div>
            <Top>
            <StickyBar>
                <SearchContainer>
                <Input value={input}  onChange={e => setInput(e.target.value)}/>
                <SearchButton style={{color:"white", fontSize:"22px", margin:"15px 0px"}} onClick={handleClick}>
                    <BsSearch />
                </SearchButton>
                </SearchContainer>
                <StoryType>
                    <h3>Everything</h3>
                    <h4>Stories</h4>
                    <h4>Videos</h4>
                    <h4>Photos</h4>
                    <div style={{border:"1px solid grey", width:"60px", textAlign:"center"}}>
                        <p>Date  +</p>
                    </div>
                </StoryType>
            </StickyBar>
            </Top>
            <NewsContainer>
                <Categories>
                    <input type="radio" name="category" onClick={e => dispatch(getSearchData(e.target.value))} value="cnn"/>
                    <label for="cnn">All CNN</label>
                    <br/>
                    <input type="radio" name="category" onClick={e => dispatch(getSearchData(e.target.value))} value="business"/>
                    <label for="business">Business</label>
                    <br/>
                    <input type="radio" name="category" onClick={e => dispatch(getSearchData(e.target.value))} value="sports"/>
                    <label for="sports">Sports</label>
                    <br/>
                    <input type="radio" name="category" onClick={e => dispatch(getSearchData(e.target.value))} value="Entertainment"/>
                    <label for="Entertainment">Entertainment</label>
                    <br/>
                    <input type="radio" name="category" onClick={e => dispatch(getSearchData(e.target.value))} value="Travel"/>
                    <label for="Travel">Travel</label>
                    <br/>
                </Categories>
                <div>
                {data.map((item => <SearchResultPage {...item}/>))}
                </div>
            </NewsContainer>
        </div>
    )
}

export {StickyTop}
