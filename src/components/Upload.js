import React from 'react';

class Upload extends React.Component {
    
handleSubmit = (event) => {
    event.preventDefault()
    console.log("submitting")
    const formData = new FormData(event.target)
    API.submitPost(formData)
      .then(data => props.setPost(data.post))
      .catch(console.error);
  }

  render () {
  return ( 

      <label htmlFor=":picture" >
        Upload image
        <input type="file" name=":picture" accept="image/*" />
      </label>
  );
  }
  
}

export default Upload; 