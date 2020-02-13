import React, { Component } from "react";
import { FormBook } from "./FormBook";
export class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
  }
  onBookAdded(data) {
    const { bookList } = this.state;
    bookList.push(data);
    this.setState({ bookList: bookList });
    console.log(this.state.bookList);
  }

  render() {
    return (
      <div className="container">
        <div className="card mt-5">
          <FormBook onBookAdded={e => this.onBookAdded(e)}/>

          {
            this.state.bookList.map((data) => {
                return (
                <div>
                  <img src="data.imageUrl" className="card-img-top"/>
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.author}</p>
                    <p  className="card-text">{data.description}</p>
                  </div>
                </div>
                )
            })      
            
          }
          
          {/* <img src="" className="card-img-top"/> 
           
            <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a  className="btn btn-primary">Go somewhere</a>
            </div> */}
        </div>
      </div>
    );
  }
}
