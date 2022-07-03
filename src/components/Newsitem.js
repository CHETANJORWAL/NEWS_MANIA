import React, { Component } from 'react'



export class Newsitem extends Component {
  
  render(){
    let {title,description,urlimage,url}=this.props; 
    return (
      <div>
        <div className="card my-3 " style={{width: "18rem"}}>
  <img src={urlimage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
     <a href={url} className="btn btn-light">Read News</a><a href="#" class="badge badge-warning">Warning</a>

   
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem


