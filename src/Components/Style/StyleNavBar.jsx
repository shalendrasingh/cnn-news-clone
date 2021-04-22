import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { dropMenu } from "../../Redux/styles/action";


const StyleNavBar = () => {
    let dispatch = useDispatch()
    const showMenu = () => {
        dispatch(dropMenu())
    }
  return (
    <div className={styles.navbar}>
        <Link to="/">
          <img src="cnn_logo.png" alt="logo" />
        </Link>
        <button onClick={showMenu} style={{backgroundColor:"transparent", border:"none", outline:"none"}}>
          <AiOutlineMenu  style={{color:"white", fontSize:"25px"}}/>
        </button>
    </div>
  );
};

export { StyleNavBar };
