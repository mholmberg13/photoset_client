import React from 'react'


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

    handleUpdate = (event, entry) => {
        this.props.handleUpdate(event, entry)
        this.toggleForm()
    }

    render () {
        const {post, handleDelete, handleUpdate, i} = this.props
        return (
            <div className="post" key={i}>
                    <h3>{ post.title }</h3>
                    <h4>{ post.photographer }</h4>
                    {/* <p>{ post.author }</p> */}
                    {/* <p>{this.state.bodyVisible ? post.body : null }</p>  */}
                    {/* <button onClick={this.toggleBody}>VIEW ENTRY</button>
                    <button onClick={this.toggleForm}>EDIT</button>
                    <button onClick={()=> handleDelete(entry)}>DELETE</button> */}
                    {/* {this.state.editVisible ? <Form id="edit-entry" entry={entry} handleSubmit={handleUpdate} toggleForm={this.toggleForm}/> : null } */}
            </div>
        )
    }
}

export default Post;