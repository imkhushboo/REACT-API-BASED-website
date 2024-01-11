import React, { Component } from 'react'

export default class SlidingButton extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.total_pages)
    }
  render() {
    return (
        <div className="d-flex ml-2 mr-2">
        <button disabled={this.props.page===1}type="button" className="btn btn-dark mr-auto p-2" onClick={this.props.onprevClick} >&larr; Previous</button>
        <button disabled={this.props.pageno===this.props.totalpage} type="button" className="btn btn-dark p-2" onClick={this.props.onnextClick}>Next &rarr;</button>
      </div>
      
    )
  }
}
