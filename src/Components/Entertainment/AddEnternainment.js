import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";

import { add_entertainmentAxios } from "../../Redux/Entertainment/action";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const AddEntertainment = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");
  var username = useSelector((state) => state.profile.data[0].username);

  // // eslint-disable-next-line eqeqeq
  const isAdmin = username == "admin";
  // const isAdmin = false;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(
      add_entertainmentAxios({
        title: title,
        urlToImage: image,
        publishedAt: time,
      })
    );
  };
  return isAdmin ? (
    <div>
      <Button type="button" onClick={handleOpen}>
        ADD NEWS
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Wrapper>
            <h2 id="transition-modal-title" style={{ textAlign: "center" }}>
              ADD NEWS
            </h2>

            <form
              onSubmit={submit}
              style={{ justifyContent: "center", alignContent: "center" }}
            >
              <input
                type="text"
                value={title}
                placeholder="Enter The Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <input
                type="text"
                value={image}
                placeholder="Paste the url of the image"
                onChange={(e) => setImage(e.target.value)}
              />
              <br />
              <input
                type="datetime-local"
                value={time}
                placeholder="Paste the url of the image"
                onChange={(e) => setTime(e.target.value)}
              />
              <br />

              <button>Login</button>
            </form>
          </Wrapper>
        </Fade>
      </Modal>
    </div>
  ) : (
    <></>
  );
};

const Wrapper = styled.div`
  color: white;
  width: 500px;
  height: 500px;
  background-image: linear-gradient(
    to right top,
    #000000,
    #18080b,
    #250e11,
    #331114,
    #411414
  );
  input {
    width: 300px;
    height: 50px;
    margin-left: 90px;
    margin-bottom: 10px;
    /* border-radius: 30px; */
    text-align: center;
    &:hover {
      background-image: linear-gradient(
        to right top,
        #d3d3d3,
        #bcbcbc,
        #a5a5a5,
        #8f8f8f,
        #797979
      );
      color: black;
    }
  }
  button {
    width: 150px;
    height: 30px;
    border: 1px solid black;
    color: white;
    text-transform: uppercase;
    margin-left: 170px;
    margin-top: 30px;
    border-radius: 50px;
    background: #631c1c;
    box-shadow: 20px 20px 60px #461414, -20px -20px 60px #802424;
  }
`;
const Button = styled.button`
  width: 50%;
  height: 50px;
  margin: auto;
  border-radius: 50px;
  background: #2b1227;
  color: white;
`;
