const newCommentHandler = async (event) => {
  event.preventDefault();
  const blog_id = document.querySelector('.new-comment').dataset.blog_id;
  const comment_text = document.querySelector('#comment-text').value.trim();
  