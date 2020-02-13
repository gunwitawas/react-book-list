import React, { Component } from 'react';

export class FormBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: '',
      title: '',
      author: '',
      description: ''
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
  }

  render(){
    return(
      <div className="container">

        <form className="mt-3 mb-3">
          <div class="form-group">
            <label>URL Image</label>
            <input type="text" class="form-control" value={this.state.imageUrl} 
            onChange={(e)=>{this.onInputImageUrl(e)}}/>
          </div>
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" value={this.state.title} 
            onChange={(e)=>{this.onInputTitle(e)}}/>
        </div>
        <div class="form-group">
            <label>author</label>
            <input type="text" class="form-control" value={this.state.author} 
            onChange={(e)=>{this.onInputAuthor(e)}}/>
        </div>
        <div class="form-group">
            <label>description</label>
            <input type="text" class="form-control" value={this.state.description} 
            onChange={(e)=>{this.onInputDescription(e)}}/>
        </div>
        
              <button type="button" class="btn btn-primary" onClick={()=>{this.onSubmit()}}>Submit</button>
        </form>

      </div>

      
      
    )
  }
}