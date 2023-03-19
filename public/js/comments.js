const newCommentHandler = async (event) => {
  event.preventDefault();
  const blog_id = document.querySelector('#new-comment').dataset.blog_id;
  const comment_text = document.querySelector('#comment-text').value.trim();
  if (comment_text) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ blog_id, comment_text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Cannot create comment');
    }
  }
};
