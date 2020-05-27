import React from "react";
import Input from "./Input.js";
import Upload from './Upload.js'

class Form extends React.Component {
  state = {
    title: "",
    photographer: "",
    shutter: "",
    iso: "",
    aperture: ""
  };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    
  };
  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();
    const { title, photographer, shutter, iso, aperture } = this.state;
    const post = {
      title: title,
      photographer: photographer,
      shutter: shutter,
      iso: iso,
      aperture: aperture
    };

    if (this.props.post) post.id = this.props.post.id;

    this.props.handleSubmit(event, post);
    
  };

  runSubmits = (event) => {
    this.handleSubmit(event)
    this.props.onSubmit(event)
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
  render() {
    return (
      <div className="form">
        <form onSubmit={this.runSubmits}>
          <Input
            handleChange={this.handleChange}
            name={"title"}
            type={"text"}
            value={this.state.title}
            id={"title"}
          />
          <br/>
          <Input
            handleChange={this.handleChange}
            name={"photographer"}
            type={"text"}
            value={this.state.photographer}
            id={"photographer"}
          />
          <br/>
          <Input
            handleChange={this.handleChange}
            name={"shutter"}
            type={"text"}
            value={this.state.shutter}
            id={"shutter"}
          />
          <br/>
          <Input
            handleChange={this.handleChange}
            name={"iso"}
            type={"text"}
            value={this.state.iso}
            id={"iso"}
          />
          <br/>
          <Input
            handleChange={this.handleChange}
            name={"aperture"}
            type={"text"}
            value={this.state.aperture}
            id={"aperture"}
          />
          <br/>

          <input id="add-update" type="submit" value={this.props.post ? "UPDATE" : "ADD"} />
        </form>
      </div>
    );
  }
}
export default Form;