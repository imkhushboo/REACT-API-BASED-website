import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import Movie from './Component/Movie';
import SlidingButton from './Component/SlidingButton';
import Spinner from './Component/Spinner';

export default class App extends Component {
 constructor(){
  super();
  let totalpage=0;
  this.state={
    result:[],
    pageno:1,
    loading :false
  };
 }

  async componentDidMount() {
    console.log("ismounted!!");
    let url=`https://api.themoviedb.org/3/movie/popular?api_key=68469f2a16f9f0186dd8cf30eafa0043&page=${this.state.pageno}`;
    this.setState({
      loading :true
    })
    let data =await fetch(url);
    let parsedData=await data.json();
    this.totalpage=parsedData.total_pages;
    console.log(parsedData);
    this.setState({
      result:parsedData.results,
      loading:false
    })
  }
  handlerNext=async()=>{
    let url=`https://api.themoviedb.org/3/movie/popular?api_key=68469f2a16f9f0186dd8cf30eafa0043&page=${this.state.pageno + 1}`;
    this.setState({
      loading :true
    })
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({
      result:parsedData.results,
      pageno:this.state.pageno + 1,
      loading :false
    });
  }
  handlerPrev=async()=>{
    let url=`https://api.themoviedb.org/3/movie/popular?api_key=68469f2a16f9f0186dd8cf30eafa0043&page=${this.state.pageno -1}`;
    this.setState({
      loading :true
    })
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({
      result:parsedData.results,
      pageno:this.state.pageno - 1,
      loading :false
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.state.loading && <Spinner />}
        <div className='container my-3'>
        <div className="row" style={{marginTop:"80px"}} >
          {
           
            !this.state.loading && this.state.result.map((element)=>{
             return ( 
              <div className='col md-4' key={element.id}>
              <Movie name={element.title} overview={element.overview} image={element.poster_path}/>
              </div>
             )
            })
          }
           </div>
      </div>
      <SlidingButton page={this.state.pageno} onnextClick={this.handlerNext} onprevClick={this.handlerPrev} totalpage={this.totalpage}/>
      </div>
    )
  }
}
