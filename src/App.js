import React from 'react';
import Header from './components/Header.js'
import Recents from './components/Carousel.js'
import NewPost from './components/NewPost.js'
import './App.css';
import Main from './components/Main.js'

class App extends React.Component {
  state = {
    posts: []
  }

  handleAdd = (event, formInputs) => {
    event.preventDefault();
    fetch("https://photoset-api.herokuapp.com/posts", {
      body: JSON.stringify(formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((createdPost) => createdPost.json())
      .then((jsonedPost) => {
        this.setState({
          posts: [jsonedPost, ...this.state.posts],
        });
      })
      .catch((error) => console.log(error));
  };

  handleDelete = (deletedPost) => {
    fetch(`https://photoset-api.herokuapp.com/posts/${deletedPost.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((json) => {
        const posts = this.state.posts.filter(
          (post) => post.id !== deletedPost.id
        );
        this.setState({ posts });
      })
      .catch((error) => console.log(error));
  };


  handleUpdate = (event, formInputs) => {
    event.preventDefault()
    console.log(formInputs.id)
    fetch(`https://photoset-api.herokuapp.com/posts/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
  })
   .then((updatedPost) => {
     this.getPosts()
   })
   .catch((error) => console.log(error))
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts () {
    fetch('https://photoset-api.herokuapp.com/posts')
      .then(response => response.json())
      .then(json => this.setState({ posts: json }))
      .catch(error => console.error(error))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Recents />
        <NewPost handleSubmit={this.handleAdd} />
          <Main 
          posts={this.state.posts}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          />
      </div>
    )
  }
  
};

export default App;
