import React from 'react'
import Post from './Post.js'

class Posts extends React.Component {
  render () {
        return (
            <div className="posts-container">
                <hr></hr>
                <div className="posts">
                    
                    {this.props.posts.map((post, i) => <Post key={i} post={post}
                    handleDelete={this.props.handleDelete}
                    handleUpdate={this.props.handleUpdate}
                    />)}
                </div>
            </div>
        )
    }
}

export default Posts