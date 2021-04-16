import React, { useEffect, useState } from "react"
import { Table } from "reactstrap"
import { useQuery, gql } from "@apollo/client"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const ALLPOST = gql`
  query($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`

const List = (props) => {
  const [dataALLPost, setDataALLPost] = useState([])

  const { loading, error, data } = useQuery(ALLPOST, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 100,
        },
      },
    },
  })
  console.log("data: ", data)

  useEffect(() => {
    setDataALLPost(data)
  }, [data])

  return (
    <>
      <div className="row">
        <div className="col-lg text-right">
          <Link className="btn btn-primary" to="/post/create">
            Create
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataALLPost &&
                dataALLPost.posts &&
                dataALLPost.posts.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.id}</td>
                      <td> {item.title}</td>
                      <td>
                        <Link className="" to={`/post/edit/${item.id}`}>
                          Edit
                        </Link>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default List
