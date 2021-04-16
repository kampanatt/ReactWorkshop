import "./assets/css/custom.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import List from "./pages/post/List.jsx"
import Forms from "./pages/post/Form.jsx"

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <div className="row content">
            <div className="col-lg-2">
              <Sidebar />
            </div>
            <div className="col-lg">
              <Switch>
                <Route exact={true} path="/">
                  <Home />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/Contact">
                  <Contact />
                </Route>
                <Route path="/post/List">
                  <List color="mmmmm" />
                </Route>
                <Route path="/post/:action/:id?">
                  <Forms />
                </Route>
              </Switch>
            </div>
          </div>
          <Footer />
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App
