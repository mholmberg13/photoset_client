import React from 'react';
import Upload from './Upload.js'
import Form from './Form.js'
import NewItemForm from './newUpload.js' 

class NewPost extends React.Component {
    render() {
        return (
            <div className="new-post">
                <NewItemForm handleSubmit={this.props.handleSubmit} getPosts={this.props.getPosts}/>
                <div className="slogan">
                    <h3>NO ACCOUNTS</h3>
                    <h2>NO LIKES</h2>
                    <h1>ONLY INSPIRATION</h1>
                </div>
            </div>
        )
    }
}

export default NewPost;