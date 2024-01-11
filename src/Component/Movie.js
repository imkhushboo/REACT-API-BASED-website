import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    return (
            <div className="card" style={{width: "15rem" ,margin:"2px 2px"}}>
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} alt="Card image cap " />
            <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            {/* <p className="card-text">{this.props.overview.slice(0,80)}</p> */}
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
    )
  }
}
