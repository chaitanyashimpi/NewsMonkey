import React, { Component } from "react";

export default class Newsitem extends Component {

  

  render() {
    let {title, description, imageUrl, newsUrl, author, date, badge} = this.props;

    return (
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <span className="badge text-bg-success mb-2">{badge}</span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel = "noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
      
    );
  }
}
