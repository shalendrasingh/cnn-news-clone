import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { edit_entertainmentAxios } from '../../Redux/Entertainment/action'
import styled from 'styled-components'

export const EditEntertainment = () => {
  let { id } = useParams()
  let dispatch = useDispatch()
  const history = useHistory()
  let entertainmentNews = useSelector(
    (state) => state.entertainment.entertainmentNews
  )
  // eslint-disable-next-line eqeqeq
  let item = entertainmentNews.find((el) => el.id == id)
  let [editState, setEditState] = useState('')
  let [editimage, setEditImage] = useState('')

  useEffect(() => {
    if (!item) {
      history.push('/entertainment')
    } else {
      setEditState(item.title)
      setEditImage(item.urlToImage)
    }
  }, [])

  console.log(item)

  const editNews = async (e) => {
    e.preventDefault()

    dispatch(
      edit_entertainmentAxios({ id, title: editState, urlToImage: editimage })
    ).then((res) => {
      if (res.success) {
        history.push('/entertainment')
      }
    })
  }

  return (
    <Wrapper>
      <Form onSubmit={editNews}>
        <h3>EDIT NEWS</h3>
        <input
          type='text'
          placeholder='edit Title'
          value={editState}
          onChange={(e) => setEditState(e.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='edit Image'
          value={editimage}
          onChange={(e) => setEditImage(e.target.value)}
        />
        <br />
        <button>SUBMIT</button>
      </Form>
    </Wrapper>
  )
}
const Form = styled.form`
  margin-top: 100px;
  /* border: 1px solid black; */
  border-radius: 50px;
  background-color: lightgrey;

  width: 50%;
  margin: auto;
  height: 500px;
  text-align: center;
  input {
    width: 70%;
    height: 50px;
    margin: 10px;
  }
  button {
    background-color: black;
    color: white;
    width: 200px;
    height: 50px;
    border: 1px solid black;
    border-radius: 30px;
    margin-top: 10px;
  }
  h3 {
    padding-top: 80px;
  }
`
const Wrapper = styled.div`
  margin-top: 100px;
`
