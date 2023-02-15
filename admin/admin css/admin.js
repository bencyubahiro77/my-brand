const API_URL = "https://beno-backend.onrender.com/api/blogs/blog"; 

// function to fetch all blog posts from the API
async function getPosts() {
const response = await fetch(API_URL);
if (!response.ok) {
throw new Error("Failed to fetch blog posts from API.");
}
const posts = await response.json();
return posts;
}

// function to delete a blog post by ID
async function deletePost(postId) {
const response = await fetch(`${API_URL}/${postId}`, { method: "DELETE" });
if (!response.ok) {
throw new Error("Failed to delete blog post from API.");
}
}

// function to update a blog post by ID
async function updatePost(postId, title, body, image) {
const response = await fetch(`${API_URL}/${postId}`, {
method: "PUT",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ title, body, image })
});
if (!response.ok) {
throw new Error("Failed to update blog post on API.");
}
}

// function to display a list of blog posts with options to delete and edit each post
async function displayPosts() {
const posts = await getPosts();

// generate HTML for each blog post
const postHtml = posts.map(post => `
<tr>
<td>${post.title}</td>
<td>
<button data-action="edit" data-post-id="${post.id}">Edit</button>
<button data-action="delete" data-post-id="${post.id}">Delete</button>
</td>
</tr>
`).join("");

// insert HTML into the table
document.querySelector("#blog-posts tbody").innerHTML = postHtml;

// add event listeners for the delete and edit buttons
document.querySelectorAll("[data-action]").forEach(button => {
const action = button.dataset.action;
const postId = button.dataset.postId;

button.addEventListener("click", async () => {
if (action === "delete") {
if (confirm("Are you sure you want to delete this post?")) {
await deletePost(postId);
await displayPosts();
}
} else if (action === "edit") {
// redirect to edit post page
window.location.href = `edit-post.html?id=${postId}`;
}
});
});
}

// function to get a single post by ID
async function getPostById(postId) {
const response = await fetch(`${API_URL}/${postId}`);
if (!response.ok) {
throw new Error("Failed to fetch blog post from API.");
}
const post = await response.json();
return post;
}

// function to pre-fill the edit form with a post's data
async function fillEditForm(postId) {
const post = await getPostById(postId);
document.querySelector("#edit-form [name=title]").value = post.title;
document.querySelector("#edit-form [name=body]").value = post.body;
document.querySelector("#edit-form [name=image]").value = post.image;
}

// add event listener for edit form submission
document.querySelector("#edit-form").addEventListener("submit", async event => {
event.preventDefault();
const postId = event.target.dataset.postId;
const title = event.target.elements.title.value;
const body = event.target.elements.body.value;
const image = event.target.elements.image.value;
await updatePost(postId, title, body, image);
window.location.href = "../blog.html"; // redirect back to admin dashboard
});


// check if the current page is the edit post page
if (window.location.pathname === "/edit-post.html") {
// get the post ID from the query string
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

// pre-fill the edit form with the post's data
fillEditForm(postId);
} else {
// display the list of blog posts on the admin dashboard
displayPosts();
}

// function to create a new blog post
async function createPost(title, body, image) {
const response = await fetch(API_URL, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ title, body, image })
});
if (!response.ok) {
throw new Error("Failed to create blog post on API.");
}
}

// add event listener for create form submission
document.querySelector("#create-form").addEventListener("submit", async event => {
event.preventDefault();
const title = event.target.elements.title.value;
const body = event.target.elements.body.value;
const image = event.target.elements.image.value;
await createPost(title, body, image);
window.location.href = "../blog.html"; // redirect back to admin dashboard
});
