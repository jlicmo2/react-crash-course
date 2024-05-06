import classes from "./NewPost.module.css";
import Modal from "../Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {

  function stopPropagation(event){
    event.stopPropagation();
  }
  

  return (
    <Modal>
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          name="body"
          required
          rows={3}
          onClick={stopPropagation}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          name="author"
          required
          onClick={stopPropagation}
        />
      </p>
      <p className={classes.actions}>
        <Link to = ".." type="button">
          Cancel
        </Link>
        <button type="submit">Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
