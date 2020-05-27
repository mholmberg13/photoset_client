import React from 'react'
import Form from './Form.js'


class Post extends React.Component {
    state = {
        editVisible: false,
        bodyVisible: false
    }

    toggleForm = () => {
        this.setState({editVisible: !this.state.editVisible})
    }

    toggleBody = () => {
        this.setState({bodyVisible: !this.state.bodyVisible})
    }

    handleUpdate = (event, post) => {
        this.props.handleUpdate(event, post)
        this.toggleForm()
    }

    render () {
        const {post, handleDelete, handleUpdate, i} = this.props
        return (
            <div className="post" key={i}>
                    <h3>{ post.title }</h3>
                    <h4>{ post.photographer }</h4>
                    <img src={post.image}/>

                    {this.state.bodyVisible ? <div className="settings"><h5>Shutter Speed: {post.shutter}</h5> <h5>ISO: {post.iso}</h5> <h5>Aperture: {post.aperture}</h5></div> : null }

                    <div className="post-buttons">
                        <button onClick={this.toggleBody}>SETTINGS</button>
                        <button onClick={this.toggleForm}>EDIT</button>
                        <button id="delete" onClick={()=> handleDelete(post)}>DELETE</button>
                    </div>

                    {this.state.editVisible ? <Form id="edit-post" post={post} handleSubmit={handleUpdate} toggleForm={this.toggleForm}/> : null }
            </div>
        )
    }
}

export default Post;