import React, { Component } from 'react';

export class FormBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: '',
      title: '',
      author: '',
      description: '',
      isAddBook: true
    }
  }
  

  onInputImageUrl(event){
    this.setState({imageUrl: event.target.value})
  }
  onInputTitle(event){
    this.setState({title: event.target.value})
  }
  onInputAuthor(event){
    this.setState({author: event.target.value})
  }
  onInputDescription(event){
    this.setState({description: event.target.value})
  }

  onSubmit(){
    const {imageUrl, title, author, description} = this.state
    if (!title || !author || !imageUrl) return
    this.props.onBookAdded({imageUrl, title, author, description})
    this.setState({imageUrl: '', title: '', author: '', description: ''})
    this.setState({isAddBook: false})
  }

  render(){
    return(
      <div className="container">
      { !this.state.isAddBook && (
        <div className="mt-3 mb-3">
          <button type="button" className="btn btn-primary" onClick={()=>{this.setState({isAddBook: true})}}>+ Add Book</button>
        </div>
      )}
      { this.state.isAddBook && (
      

        <form className="mt-3 mb-3">
          <div className="form-group">
            <label>URL Image</label>
            <input type="text" className="form-control" value={this.state.imageUrl} 
            onChange={(e)=>{this.onInputImageUrl(e)}}/>
          </div>
        <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" value={this.state.title} 
            onChange={(e)=>{this.onInputTitle(e)}}/>
        </div>
        <div className="form-group">
            <label>author</label>
            <input type="text" className="form-control" value={this.state.author} 
            onChange={(e)=>{this.onInputAuthor(e)}}/>
        </div>
        <div className="form-group">
            <label>description</label>
            <input type="text" className="form-control" value={this.state.description} 
            onChange={(e)=>{this.onInputDescription(e)}}/>
        </div>
              <button type="button" className="btn btn-primary" onClick={()=>{this.onSubmit()}}>Add</button>
              <button type="button" className="btn btn-danger ml-3" onClick={()=>{this.setState({isAddBook: false})}}>Cancel</button>
        </form>
      )}
      </div>
      
    )
  }
}