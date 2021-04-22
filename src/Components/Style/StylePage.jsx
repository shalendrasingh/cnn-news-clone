import React from "react";
import { useSelector } from "react-redux";
import { Footer } from "../Footer/Footer";
import { DropDownMenu } from "./DropDownMenu";
import {EditorsPick} from "./EditorsPick";
import { PhotographyBlock } from "./PhotographyBlock";
import RandomNewsBlock from "./RandomNewsBlock";
import { StyleCategory } from "./StyleCategory";
import { StyleNavBar } from "./StyleNavBar";
import { StylePageCarousel } from "./StylePageCarousel";

const StylePage = () => {
    const menu =  useSelector((state) => state.style.menu)
  return (
    <div>
        <StyleNavBar/>
        {!menu? 
        (
        <>
        <StylePageCarousel />
        <EditorsPick/>
        <RandomNewsBlock start={0} end={4}/>
        <div style={{width:"70%", height:"100px", borderBottom:"1px solid grey", margin:"auto"}}></div>
        <PhotographyBlock/>
        <RandomNewsBlock start={5} end={9}/>
        <div style={{position:"relative"}}>
            <img style={{width:"100%", height:"90vh", backgroundColor: "rgba(0, 0, 0, .5)"}} src="https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/428/2018/06/18160553/rome-1948384_12801.jpg" alt="buildingImage"/>
            <div style={{position:"absolute", textAlign:"center", margin:"auto", top:"25%", left:"30%" , width:"40%", color:"white"}}>
                <h3>Architecture</h3>
                <h1>The Ancient Building Still Being Used After 2000 Years</h1>
                <p>The architectural marvel of the Roman Empire, the Pantheon still sparks wonder today</p>
                <h5>Jaque Palumbo | CNN</h5>
            </div>
        </div>
        <StyleCategory/>
        <div style={{backgroundColor:"rgb(244,244,244)", display:"flex", justifyContent:"center"}}>
          <div style={{width:"20%"}}>
            <h4>GUEST EDITOR</h4>
            <h1><strong style={{color:"red"}}>Christian Loubotin</strong> <br/>Journey</h1>
          </div>
          <div style={{width:"fit-content"}}>
          <img style={{height:"400px", width:"500px"}} src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_817,c_fill,g_auto,h_460,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200226163939-christian-louboutin-cnnstyle-guest-editor-portrait2.jpg"/>
          </div>
        </div>
        <h4 style={{width:"73%", margin:"20px auto", color:"grey"}}>RECOMMENDED</h4>
        <RandomNewsBlock start={0} end={19}/>
        <Footer />
         </>): 
         (<><DropDownMenu/></>)
         }
        
    </div>
  );
};

export { StylePage };
