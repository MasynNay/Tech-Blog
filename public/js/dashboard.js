const newBlogHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();
  if (title && content) {
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to write to dashboard');
    }
  }
};
const updateBlogHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');
  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();
  if (id && title && content) {
    const response = await fetch(`/api/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ id, title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed To Update Blog. Please Try Again');
    }
  }
};
const deleteBlogHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/blog/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed To Delete This Blog. Please Try Again');
    }
  }
};

document
  .querySelector('.create-blog-form')
  .addEventListener('submit', newBlogHandler);

document
  .querySelector('.update-blog-form')
  .addEventListener('submit', updateBlogHandler);

document
  .querySelector('.delete-blog-form')
  .addEventListener('click', deleteBlogHandler);