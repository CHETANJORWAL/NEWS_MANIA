import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import "./Spinner.css"

export class Newscomponent extends Component {
  
  constructor(){
    super()
    this.state={
     article: [],
     loading:false,

     page:1,totalresults:0

    }
  }
  
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ea5508f62d4947f2ba53fefd33ffced9&page=1&pagesize=15`
    this.setState({loading:true})
    let data       = await fetch(url);
    let parseddata = await data.json();
    
this.setState({article:parseddata.articles,totalresults:parseddata.totalResults,loading:false});

  }

  prev = async () =>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ea5508f62d4947f2ba53fefd33ffced9&page=${this.state.page-1}&pagesize=15`
    this.setState({loading:true})
    let data       = await fetch(url);
    let parseddata = await data.json();
    let Page=this.state.page-1
    this.setState({article:parseddata.articles,page:Page,loading:false});

  }
  next = async () =>{
    // console.log(this.state.page +1,Math.ceil(this.state.totalresults / 9))
     if(this.state.page +1 > Math.ceil(this.state.totalresults / 15)){}
     else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ea5508f62d4947f2ba53fefd33ffced9&page=${this.state.page+1}&pagesize=15`
    this.setState({loading:true})
    let data       = await fetch(url);
    let parseddata = await data.json();
    let Page=this.state.page+1
    this.setState({article:parseddata.articles,page:Page,loading:false});
     }
     
  }
  
  render() {
    return (
      <div>
        <div className="Spinner my-2">{this.state.loading && < Spinner/>}</div>
       
          <div className="container my-4">
         <div className="row my-4">
  {!this.state.loading&&this.state.article.map((element)=>{
  return  <div className="col-md-4" key={element.url}><Newsitem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,70):""}  urlimage={element.urlToImage?element.urlToImage:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} url={element.url}/></div>
  })}

</div>
           <div className=' container  d-flex justify-content-between my-5'>
               <button disabled={this.state.page<=1} type="button" className="btn btn-outline-dark" onClick={this.prev} >&#8592; PREV</button>
               <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalresults / 15)} className="btn btn-outline-dark" onClick={this.next}>  NEXT &#8594; </button>
               </div>
           </div>
        
      </div>
    )
  }
}

export default Newscomponent


