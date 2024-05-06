import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  
  function submitHandler() {
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData); // Pass postData to onAddPost
    onCancel();
  }

  function stopPropagation(event){
    event.stopPropagation();
  }
  

  return (
    <div className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={bodyChangeHandler}
          onClick={stopPropagation}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={authorChangeHandler}
          onClick={stopPropagation}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" onClick={submitHandler}>Submit</button>
      </p>
    </div>
  );
}

export default NewPost;
