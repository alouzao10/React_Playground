import React, { Component } from "react";
import PropTypes from "prop-types";
// Implement the Redux Store
// Connect to the Store from the Provider at the App level
import { connect } from "react-redux";
import { fetchPosts } from "../Redux/Actions/postActions";

class Posts extends Component {
   constructor(props) {
      super(props);
      this.state = {
         posts: [],
      };
   }

   // Call the action to fetch the posts
   componentWillMount() {
      console.log("Component Will Mount");
      this.props.fetchPosts();
   }

   // Call to get the latest state from the Store
   componentWillReceiveProps(nextProps) {
      if (nextProps.newPost) {
         this.props.posts.unshift(nextProps.newPost); // Adds new post to top
      }
   }

   render() {
      return (
         <div>
            <h1>Posts</h1>
            {this.props.posts.map((post, i) => (
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

Posts.propTypes = {
   fetchPosts: PropTypes.func.isRequired,
   posts: PropTypes.array.isRequired,
   newPost: PropTypes.object,
};

// Need to use the connect to connect with the store included by the Provider
// Way to access the state of the Store and actions, map the state to the properties
// The Action is placed into props
const mapStateToProps = (state) => ({
   posts: state.posts.posts,
   newPost: state.posts.post,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
