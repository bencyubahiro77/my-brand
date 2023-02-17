const blogList = document.getElementById('blog-posts');

const newData = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

fetch('https://beno-backend.onrender.com/api/blogs/blog', newData)
  .then(async (response) => {
    const data = await response.json();

    // Loop through each blog and add it to the table
    data.blogs.forEach((blog) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${blog.title}</td>
        <td><a href="edit.php?id=${blog._id}">Edit</a></td>
        <td><a href="#" onclick="deleteBlog('${blog._id}')">Delete</a></td>
      `;
      blogList.insertAdjacentElement('afterbegin', row); // Add the row to the top of the table
    });
  })
  .catch((error) => console.error(error));


function deleteBlog(blogId) {
  // Confirm with the user before deleting the blog
  const confirmed = confirm('Are you sure you want to delete this blog?');
  if (!confirmed) {
    return;
  }

  // Send a DELETE request to the backend API to delete the blog
  fetch(`https://beno-backend.onrender.com/api/blogs/blog/${blogId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 204) {
        // Remove the deleted blog from the table
        const row = document.getElementById(`blog-${blogId}`);
        row.parentNode.removeChild(row);
        location.reload();
      }
    })
    .catch((error) => console.error(error));
}
