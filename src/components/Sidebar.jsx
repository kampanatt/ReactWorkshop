import React from "react"
import { ListGroup, ListGroupItem } from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <Link className="nav-Link" to="/post/List">
            Post
          </Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default Sidebar
