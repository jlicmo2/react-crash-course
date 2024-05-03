import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
const [posts, setPosts] = useState([]);

function addPostHandler(events){
    setPosts((existingPosts)=> [postData, ...existingPosts]);
}
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting} onAddPost={addPostHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <li>
          {posts.map((post) => <Post author={post.author} body={post.body}/>)}
        </li>
      </ul>
    </>
  );
}

export default PostsList;
