import React from 'react'
import Form from './Form.js'

export default class NewItemForm extends React.Component {

    state = {
        title: "",
        image: {},
        photographer: "",
        shutter: "",
        iso: "",
        aperture: ""
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.files[0]
            }
        })
        console.log(e.target.files)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state)
    };


    onSubmit = (event) => {
        event.preventDefault()
        const post = new FormData()
        post.append("title", this.state.title)
        post.append("image", this.state.image)
        post.append("photographer", this.state.photographer)
        post.append("shutter", this.state.shutter)
        post.append("iso", this.state.iso)
        post.append("aperture", this.state.aperture)
        fetch(`http://localhost:3000/posts`, {
            method: "POST",
            body: post
        })
        console.log(this.state.title)
        this.props.getPosts()
    }

    componentDidMount() {
        if (this.props.post) {
            this.setState({
              title: this.props.post.title || '',
              photographer: this.props.post.photographer || '',
              shutter: this.props.post.shutter || '',
              iso: this.props.post.iso || '',
              ss: this.props.post.aperture || '',
              id: this.props.post.id || ''
            })
          }
      }
    

    render(){
        return (
            <div className="form">
                <h1>New Upload</h1>
                <form onSubmit={this.onSubmit}>
                    
                    <input type="file" name="image" onChange={this.onChange}/>
                    <br/>
                    <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="photographer" value={this.state.photographer} placeholder="photographer" onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="shutter" value={this.state.shutter} placeholder="shutter" onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="iso" value={this.state.iso} placeholder="iso" onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="aperture" value={this.state.aperture} placeholder="aperture" onChange={this.handleChange}/>
                    <br/>
                    <input id="upload-button" type="submit"/>
                </form>
                
                
            </div>
        )
    }
}