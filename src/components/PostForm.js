import React from 'react'
import {connect} from 'react-redux'
import {createPosts, showAlert} from "../redux/actions";
import {AlertMessage} from "./AlertMessage";

class PostForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault()
    const {title} = this.state
    if (title.trim() === '') {
      return this.props.showAlert('You need to fill in this field')
    }
    console.log(this.state)
    const newPost = {
      title,
      id: Date.now().toString()
    }
    this.props.createPosts(newPost)
    this.setState({title: ''})
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
        {this.props.alert && <AlertMessage message={this.props.alert}/>}
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

const mapDispatchToProps = {
  createPosts,
  showAlert
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(null, mapDispatchToProps)(PostForm)
