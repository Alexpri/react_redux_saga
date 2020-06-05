import React from 'react'

export default class PostForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault()
    const {title} = this.state
    console.log(this.state)
    const newPost = {
      title,
      id: Date.now().toString()
    }
    console.log(newPost)
  }

  changeInputHandler = event => {
    event.persist()
    this.setState(prev => ({
      ...prev, ...{
        [event.target.name]: event.target.value
      }
    }))
  }


  render () {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Email address</label>
          <div className="d-flex">
            <input
              value={this.state.title}
              onChange={this.changeInputHandler}
              type="text"
              className="form-control mr-3"
              name="title"
              id="title"/>
            <button className="btn btn-success" type="submit">Create</button>
          </div>
        </div>
      </form>
    )
  }
}
