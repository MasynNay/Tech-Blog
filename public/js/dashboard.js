// New Blog
const newBlog = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blogTitle").value.trim();

  const description = document.querySelector("#blogDescription").value.trim();

  if (title && description) {
    const response = await fetch(`/api/blog`, {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed To Create Blog. Please Try Again");
    }
  }
};

// Delete Blog
const deleteBlog = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Cannot Delete This Blog. Please Try Again");
    }
  }
};

// Update Blog
const updateBlog = async (event) => {
  event.preventDefault();
  console.log("entered form");
  const id = event.target.getAttribute("data-id");
  if (event.target.hasAttribute("data-id")) {
    const title = document.querySelector(`#blogTitle${id}`).value.trim();
    const content = document.querySelector(`#blogDescription${id}`).value.trim();
    if (title && content) {
      const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("failed to update blog post!");
      }
    }
  }
};

document.querySelector(".newBlogForm").addEventListener("submit", newBlog);

document.querySelector(".blogList").addEventListener("click", deleteBlog);

document.querySelector(".blogUpdate").addEventListener("submit", updateBlog);
