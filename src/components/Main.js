import React from 'react'
import Posts from './Posts.js'

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Posts
                    posts={this.props.posts}
                    handleDelete={this.props.handleDelete}
                    handleUpdate={this.props.handleUpdate}
                />
            </div>
        )
    }
}

export default Main;