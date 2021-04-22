import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";

const links = [
  {
    to: "/markets",
    title: "Markets",
  },
  {
    to: "/tech",
    title: "Tech",
  },
  {
    to: "/media",
    title: "Media",
  },
  {
    to: "/success",
    title: "Success",
  },
  {
    to: "/perspectives",
    title: "Perspective",
  },
  {
    to: "/video",
    title: "Video",
  },
];

const BussinessNavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftmenu}>
        <Link to="/">
          <img src="cnn_logo.png" alt="logo" />
        </Link>
        {links.map(({ to, title }) => (
          <Link to={to} key={to}>
            {title}
          </Link>
        ))}
      </div>
      <div className={styles.rightmenu}>
        <Link to="/edition">
          <select>
            <option defaultValue>Edition</option>
            <option>U.S.</option>
            <option>International</option>
            <option>Arabic</option>
            <option>Espanol</option>
          </select>
        </Link>
        <Link className={styles.search} to="/footer">
          <BsSearch />
        </Link>
        <Link className={styles.search} to="/profile">
          <CgProfile />
        </Link>
        <Link className={styles.search} to="/footer">
          <AiOutlineMenu />
        </Link>
      </div>
    </div>
  );
};

export { BussinessNavBar };
