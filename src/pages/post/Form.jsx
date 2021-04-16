import React, { useEffect, useState } from "react"
import { Button, Form, Label, Input, Col, FormGroup, FormText } from "reactstrap"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { useMutation, useLazyQuery, gql } from "@apollo/client"
import { useParams, Link } from "react-router-dom"

import SweetAlert from "react-bootstrap-sweetalert"

const CREATEPOST = gql`
  mutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`
const GETPOST = gql`
  query {
    post(id: 1) {
      id
      title
      body
    }
  }
`
const UPDATEPOST = gql`
  mutation($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      body
    }
  }
`
const DELETEPOST = gql`
  mutation($id: ID!) {
    deletePost(id: $id)
  }
`

const Forms = () => {
  const { action, id } = useParams()
  const [alertShow, setAlertShow] = useState(false)
  // console.log("action, id: ", action, id)
  const [CreatePost, { loading: loadingCreatePost, error: errorCreatePost, data: dataCreatePost }] = useMutation(CREATEPOST)
  const { register, handleSubmit, errors, watch, control, setValue } = useForm()
  const doSubmit = (data) => {
    console.log(data)
    if (action === "create") {
      CreatePost({
        variables: {
          input: {
            title: data.title,
            body: data.body,
          },
        },
      })
    } else {
      UpdatePost({
        variables: {
          id: id,
          input: {
            body: data.body,
          },
        },
      })
    }
  }
  useEffect(() => {
    if (dataCreatePost) {
      setAlertShow(true)
    }
  }, [dataCreatePost])

  const [GetPost, { loading: loadingGetPost, error: errorGetPost, data: dataGetPost }] = useLazyQuery(GETPOST, {
    variables: {},
  })
  // console.log("dataGetPost: ",  ddataGetPost)

  useEffect(() => {
    if (action === "edit") {
      GetPost()
    }
  }, [])

  useEffect(() => {
    console.log("dataGetPost: ", dataGetPost)
    if (dataGetPost) {
      console.log("dataGetPost.post.id.title: ", dataGetPost.post.title)
      setValue("title", dataGetPost.post.title)
      setValue("body", dataGetPost.post.body)
    }
  }, [dataGetPost])

  const [UpdatePost, { loading: loadingUpdatePost, error: errorUpdatePost, data: dataUpdatePost }] = useMutation(UPDATEPOST)
  const [DeletePost, { loading: loadingDeletePost, error: errorDeletePost, data: dataDeletePost }] = useMutation(DELETEPOST)
  const doDelete = () => {
    DeletePost({
      variables: {
        id: parseInt(id),
      },
    })
  }

  const onConfirm = () => {
    setAlertShow(false)
  }

  return (
    <>
      <SweetAlert success show={alertShow} title="Good job!" onConfirm={onConfirm}>
        You clicked the button!
      </SweetAlert>
      <div className="row">
        <div className="col-lg text-right">
          <Button color="danger" onClick={() => doDelete()} className={action === "create" ? "d-none" : ""}>
            ลบ
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <form onSubmit={handleSubmit(doSubmit)}>
            <FormGroup>
              <Label for="exampleEmail">title</Label>
              <input className="form-control " name="title" ref={register({ required: "This is required." })} disabled={action === "edit"} />
              <ErrorMessage errors={errors} name="title" render={({ message }) => <div className="text-danger">{message}</div>} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">body</Label>
              <input className="form-control" name="body" ref={register({ required: "This is required." })} />
              <ErrorMessage errors={errors} name="body" render={({ message }) => <div className="text-danger">{message}</div>} />
            </FormGroup>
            <Button color="primary">Submit</Button>{" "}
            <Link className="btn btn-danger" to={`/post/list`}>
              Cancle
            </Link>
          </form>
        </div>
      </div>
      {/* {JSON.stringify(watch())} */}
    </>
  )
}

export default Forms
