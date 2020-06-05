import React from 'react'

export default ({posts}) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Upload</button>
  }
  return (
    <div>
      <h2>Fetched Posts</h2>
    </div>
  )
}
