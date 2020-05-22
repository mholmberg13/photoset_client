import React from 'react';
import Upload from './components/Upload.js'
import './App.css';
import Main from './components/Main.js'

class App extends React.Component {
  state = {
    posts: []
  }

  // handleAdd = (event, formInputs) => {
  //   event.preventDefault();
  //   fetch("https://sci-log.herokuapp.com/entries", {
  //     body: JSON.stringify(formInputs),
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((createdEntry) => createdEntry.json())
  //     .then((jsonedEntry) => {
  //       // add Entry to entries
  //       this.setState({
  //         entries: [jsonedEntry, ...this.state.entries],
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };

  // handleDelete = (deletedEntry) => {
  //   fetch(`https://sci-log.herokuapp.com/entries/${deletedEntry.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((json) => {
  //       const entries = this.state.entries.filter(
  //         (entry) => entry.id !== deletedEntry.id
  //       );
  //       this.setState({ entries });
  //     })
  //     .catch((error) => console.log(error));
  // };


  // handleUpdate = (event, formInputs) => {
  //   event.preventDefault()
  //   console.log(formInputs.id)
  //   fetch(`https://sci-log.herokuapp.com/entries/${formInputs.id}`, {
  //     body: JSON.stringify(formInputs),
  //     method: 'PUT',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     }
  // })
  //  .then((updatedEntry) => {
  //    this.getEntries()
  //  })
  //  .catch((error) => console.log(error))
  // }

  componentDidMount() {
    this.getEntries()
  }

  getEntries () {
    fetch('https://photoset-api.herokuapp.com//posts')
      .then(response => response.json())
      .then(json => this.setState({ posts: json }))
      .catch(error => console.error(error))
  }
  render() {
    return (
      <div className="App">
          <Main 
          posts={this.state.posts}
          />
      </div>
    )
  }
  
};

export default App;
