import React from 'react'
import {connect} from 'react-redux'
import Post from "./Post";

const Posts = ({syncPosts}) => {
  if (!syncPosts.length) {
    return <p>There is no post</p>
  }
  return this.state.posts.map(post => <Post post={post} key={post}/>)
}

const mapStateToProps = state => {
  console.log(state)
  return {
    syncPosts: state.posts.posts
  }
}

export default connect(mapStateToProps, null)(Posts)
