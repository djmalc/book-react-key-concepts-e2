import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onAddPost }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [isSendingRequest, setIsSendingRequest] = useState(false);

  function handleUpdateTitle(event) {
    setEnteredTitle(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSendingRequest(true);
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title: enteredTitle }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const newPost = await response.json();
    newPost.id = Date.now();
    
    onAddPost(newPost);

    setIsSendingRequest(false);
    setEnteredTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={handleUpdateTitle} value={enteredTitle} />
      </div>
      <button disabled={isSendingRequest}>
        {isSendingRequest ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}

export default NewPost;