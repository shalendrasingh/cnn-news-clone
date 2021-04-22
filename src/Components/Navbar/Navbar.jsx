import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import {useContext} from "react"
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navDropMenu } from "../../Redux/SearchPage/action";


const links1 = [
  {
    to: "/world",
    title: "World",
  },
  {
    to: "/uspolitics",
    title: "Us Politics",
  },
  {
    to: "/business",
    title: "Business",
  },
  {
    to: "/health",
    title: "Health",
  },
  {
    to: "/entertainment",
    title: "Entertainment",
  },
  {
    to: "/style",
    title: "Style",
  },
  {
    to: "/travel",
    title: "Travel",
  },
  {
    to: "/sports",
    title: "Sports",
  },
  {
    to: "/videos",
    title: "Videos",
  },
];
const links2 = [
  {
    to: "/style",
    title: "Style",
  },
  {
    to: "/travel",
    title: "Travel",
  },
  {
    to: "/sports",
    title: "Sports",
  },
  {
    to: "/videos",
    title: "Videos",
  },
];
const Navbar = () => {

  const [selectedLang, setSelectedLang] = useState("")
  const {handleLanguage} = useContext(AuthContext)

  // console.log(selectedLang)
  handleLanguage(selectedLang)
  // 
  const handleChange = (e) => {
    let {value} = e.target 
    setSelectedLang(value)
  }

  const dispatch = useDispatch()
  const menu = useSelector((state) => state.search.menu)
  return (
    <div className={styles.navbar}>
      <div className={styles.leftmenu}>
        <Link to="/">
          <img src="../cnn_logo.png" alt="logo" />
        </Link>
        {links1.map(({ to, title }) => (
          <Link to={to} key={to}>
            {title}
          </Link>
        ))}
      </div>
      <div className={styles.rightmenu}>
        
      <select value={selectedLang} onChange={handleChange}>
        <option defaultValue hidden>Edition</option>
        <option value="en">English</option>
        <option value="ar">عربي</option>
        <option value="sp">Español</option>
      </select>

        <Link className={styles.search} to="/footer">
          <BsSearch />
        </Link>
        <Link className={styles.search} to="/login">
          <CgProfile />
        </Link>
        <Link className={styles.search}>
        <button onClick={() => dispatch(navDropMenu())}  style={{backgroundColor:"transparent", border:"none", outline:"none"}}>
          {!menu? <AiOutlineMenu style={{color:"white", fontSize:"20px", fontWeight:"bold"}}/>: <AiOutlineClose style={{color:"white", fontSize:"20px", fontWeight:"bold"}}/>}
        </button>
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
