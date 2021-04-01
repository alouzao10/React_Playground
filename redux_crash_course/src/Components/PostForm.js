import React, { Component } from "react";

class PostForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: "",
         body: "",
      };
      this.updateField = this.updateField.bind(this);
      this.submitForm = this.submitForm.bind(this);
   }

   updateField = (e) => {
      let field = e.target.name;
      let value = e.target.value;
      this.setState({ [field]: value });
   };

   submitForm = (e) => {
      e.preventDefault();

      // Create the new post
      const newPost = {
         title: this.state.title,
         body: this.state.body,
      };

      // Submit the new post
      fetch("https://jsonplaceholder.typicode.com/posts", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(newPost),
      })
         .then((ret) => ret.json())
         .then((data) => {
            this.setState({ posts: data });
            console.log(data);
         });
   };

   render() {
      return (
         <div>
            <h1>Post Form</h1>
            <form onSubmit={this.submitForm}>
               <div>
                  <label>Title</label>
                  <br />
                  <input
                     type='text'
                     name='title'
                     value={this.state.title}
                     onChange={this.updateField}
                  />
               </div>
               <br />
               <div>
                  <label>Post</label>
                  <br />
                  <textarea
                     name='body'
                     value={this.state.body}
                     onChange={this.updateField}
                  />
               </div>
               <button type='submit'>Submit</button>
            </form>
         </div>
      );
   }
}

export default PostForm;
