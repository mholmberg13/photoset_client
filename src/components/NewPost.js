import React from 'react';
import Upload from './Upload.js'
import Form from './Form.js'

class NewPost extends React.Component {
    render() {
        return (
            <div className="new-post">
                <Upload />
                <Form handleSubmit={this.props.handleSubmit} />
            </div>
        )
    }
}

export default NewPost;