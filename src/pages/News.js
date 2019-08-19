import React from "react"
import {Helmet} from "react-helmet"

class News extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="contain">
          <span className="main-title">NEWS</span>
        </div>
        <div className="white-contain">
          <span className="title">Read our blog posts!</span>
          <iframe width="100%" height="300px" frameBorder="0" src="https://medium.com/@joeyhua/the-i-in-team-b5f1e9a9ec0c"></iframe>
        </div>
      </div>
    )
  }
}

export default News