import React, { Component } from "react";

class Posts extends Component {
   constructor(props) {
      super(props);
      this.state = {
         posts: [],
      };
   }

   componentWillMount() {
      console.log("Component Will Mount");
      // Make the fetch request to get posts on the component initial render
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((ret) => ret.json())
         .then((data) => {
            this.setState({ posts: data });
            console.log(data);
         }); // Put the data into the state
   }

   render() {
      return (
         <div>
            <h1>Posts</h1>
            {this.state.posts.map((post, i) => (
               <div key={i}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <hr />
               </div>
            ))}
         </div>
      );
   }
}

export default Posts;
