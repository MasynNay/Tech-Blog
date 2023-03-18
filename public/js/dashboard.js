const newHandler = async (event) => {
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
const updateHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');
  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();
  if (id && title && content) {
    const response = await fetch(`/api/blog/${id}`, {
      method: 'PUT',
      body.JSON.stringify({ id, title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update this blog');
    }
  }
};
const deleteHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/blog/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};