import React, { Component } from "react";
import { FormBook } from "./FormBook";
import axios from 'axios';
export class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
    
  }
  componentDidMount() {
    console.log('call api')
     axios.get(`https://jsonplaceholder.typicode.com/posts`) //fack API
      .then(res => {
        console.log('response : ',res)
        const {bookList} = this.state
        res.data.map((data) => {
        const bookObj = {
          imageUrl: 'https://adaybulletin.com/wp-content/uploads/2019/01/feature_books_575.jpg',
          title: data.title,
          author : 'fack author',
          description : data.body,
        }
        bookList.push(bookObj);
        })
        this.setState({ bookList: bookList})
      }).catch(err => console.log('error : ',err))
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
        <div className="card mt-5 mb-3">
          <FormBook onBookAdded={e => this.onBookAdded(e)}/>
        </div>
          <div className="row">
          {
            this.state.bookList.map((data) => {
                return (
                <div className="col-4">
                <div className="card mb-1">
                  <img src={data.imageUrl} className="card-img-top"/>
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.author}</p>
                    <p  className="card-text">{data.description}</p>
                  </div>
                </div>
                </div>
                )
            })
          }
        </div>
      </div>
    );
  }
}
