import React from 'react'
import { MenuWrapper } from '../../Styles/ContainerStyles'
import {GrFacebook, GrTwitter, GrInstagram} from 'react-icons/gr'

const DropDownMenu = () => {
    const [bg, setBg] = React.useState("none")
    const MouseLeave =() => {
        setBg('none')
    }
    return (
        <MenuWrapper style={{backgroundImage:`${bg}`}}>
            <h1 onMouseLeave={MouseLeave} onMouseEnter={() => setBg(`url('https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1415&q=80')`)}>Arts</h1>
            <h1 onMouseLeave={MouseLeave} onMouseEnter={() => setBg(`url('https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80')`)}>Design</h1>
            <h1 onMouseLeave={MouseLeave} onMouseEnter={() => setBg(`url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`)}>Fashion</h1>
            <h1 onMouseLeave={MouseLeave} onMouseEnter={() => setBg(`url("https://images.unsplash.com/photo-1465804575741-338df8554e02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80")`)}>Architechture</h1>
            <h1 onMouseLeave={MouseLeave} onMouseEnter={() => setBg(`url('https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`)}>Luxury</h1>
            <h1 onMouseLeave={MouseLeave} onMouseEnter={() => setBg(`url('https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80')`)}>Beauty</h1>
            <h4 style={{marginTop:"200px"}}>FOLLOW US ON</h4>
            <GrFacebook style={{ fontSize: "20px", margin: "0px 10px" }} />
            <GrTwitter style={{ fontSize: "20px", margin: "0px 10px" }} />
            <GrInstagram style={{ fontSize: "20px", margin: "0px 10px" }} />
        </MenuWrapper>
    )
}

export {DropDownMenu}
