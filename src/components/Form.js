import React from "react";
import Input from "./Input.js";
import Descript from "./Descript.js";


class Form extends React.Component {
  state = {
    title: "",
    photographer: "",
    description: "",
    iso: "",
    ss: "",
    ap: ""
  };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    
  };
  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();

    const { title, photographer, description, iso, ss, ap } = this.state;
    const post = {
      title: title,
      photographer: photographer,
      description: description,
      iso: iso,
      ss: ss,
      ap: ap
    };

    if (this.props.post) post.id = this.props.post.id;

    this.props.handleSubmit(event, post);
    
  };

  
  componentDidMount() {
    if (this.props.post) {
        this.setState({
          title: this.props.post.title || '',
          photographer: this.props.post.photographer || '',
          description: this.props.post.description || '',
          iso: this.props.post.iso || '',
          ss: this.props.post.ss || '',
          ap: this.props.post.ap || '',
          id: this.props.post.id || ''
        })
      }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <Descript
            handleChange={this.handleChange}
            name={"description"}
            value={this.state.description}
            id={"description"} 
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
          name={"ss"}
          type={"text"}
          value={this.state.ss}
          id={"ss"}
        />
        <br/>
        <Input
          handleChange={this.handleChange}
          name={"ap"}
          type={"text"}
          value={this.state.ap}
          id={"ap"}
        />
        <br/>
        <input id="add-update" type="submit" value={this.props.post ? "UPDATE" : "ADD"} />
      </form>
    );
  }
}
export default Form;