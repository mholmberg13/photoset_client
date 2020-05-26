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
                    <p>{this.state.bodyVisible ? post.description : null }</p>
                    <img src={post.picture}/>
                    <button onClick={this.toggleBody}>VIEW POST</button>
                    <button onClick={this.toggleForm}>EDIT</button>
                    <button onClick={()=> handleDelete(post)}>DELETE</button>
                    {this.state.editVisible ? <Form id="edit-post" post={post} handleSubmit={handleUpdate} toggleForm={this.toggleForm}/> : null }
            </div>
        )
    }
}

export default Post;