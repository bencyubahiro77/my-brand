// //------------------------------ registration js code --------------------------//

const form = document.getElementById("signup-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = form.elements.namedItem("first-name").value;
  const lastName = form.elements.namedItem("last-name").value;
  const email = form.elements.namedItem("email").value;
  const password = form.elements.namedItem("password").value;
  const passwordRepeat = form.elements.namedItem("password-repeat").value;

  if (password !== passwordRepeat) {
    alert("Passwords do not match!");
    return;
  }

  const account = {
    firstName,
    lastName,
    email,
    password,
  };

  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  if (accounts.some((account) => account.email === email)) {
      window.location.href="login.html"
    alert("An account already exists.");
    return;
  }
  accounts.push(account);
  localStorage.setItem("accounts", JSON.stringify(accounts));
  window.location.href="homepage.html"
  alert("Account created successfully!");
});


// //-------------------------- login js code ----------------------------------------//
function myform(){
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.elements.namedItem("email").value;
  const password = loginForm.elements.namedItem("password").value;

  const accounts = JSON.parse(localStorage.getItem("accounts"));

  if (!accounts) {
      alert("No accounts found. Please sign up first.");
      return;
    }

    const account = accounts.find((account) => account.email === email);
    if (!account) {
      alert("Email not found. Please try again or sign up.");
      return;
    }

    if (account.password !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }
    window.location.href="homepage.html";  

  })};

 //---------------------------------contact js code ------------------------//

function sendMessage (){
const form2 = document.getElementById("contact-form");
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form2.elements.namedItem("name").value;
  const email = form2.elements.namedItem("email").value;
  const message = form2.elements.namedItem("message").value;

  const messageData = {
    name,
    email,
    message,
  };

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(messageData);
  localStorage.setItem("messages", JSON.stringify(messages));
  alert("Message sent successfully!");
  location.reload();
});

const messages = JSON.parse(localStorage.getItem("messages")) || [];

messages.forEach((message) => {
  console.log(`Name: ${message.name}`);
  console.log(`Email: ${message.email}`);
  console.log(`Message: ${message.message}`);
})};



//---------------------------------- blog js code ------------------------------------------------//
      //------------------------------like-------------------//
function libutton(){
let likeButton = document.getElementById("like-button1");
let likecount = document.getElementById("like-count1");

let count = 0;

if(localStorage.getItem('count')){
  count = parseInt(localStorage.getItem('count'));
    likecount.innerHTML = count;
}
likeButton.addEventListener("click",
function(){
  count += 1;
  likecount.innerHTML = count;
  localStorage.setItem('count',count);
})};

function libutton2(){
  let likeButton = document.getElementById("like-button2");
  let likecount = document.getElementById("like-count2");
  
  
  let count = 0;
  
  if(localStorage.getItem('count2')){
    count = parseInt(localStorage.getItem('count2'));
      likecount.innerHTML = count;
  }
  likeButton.addEventListener("click",
  function(){
    count += 1;
    likecount.innerHTML = count;
    localStorage.setItem('count2',count);
  })};

//------------------------------- unlike---------------------------------//
function unlibutton(){
  let unlikeButton = document.getElementById("unlike-button");
  let unlikecount = document.getElementById("unlike-count");
  
  let count = 0;
  
  if(localStorage.getItem('uncount')){
    count = parseInt(localStorage.getItem('uncount'));
      unlikecount.innerHTML = count;
  }
  unlikeButton.addEventListener("click",
  function(){
    count +=1;
    unlikecount.innerHTML = count;
    localStorage.setItem('uncount',count);
  })};


  function unlibutton2(){
    let unlikeButton = document.getElementById("unlike-button2");
    let unlikecount = document.getElementById("unlike-count2");
    
    let count = 0;
    
    if(localStorage.getItem('uncount2')){
      count = parseInt(localStorage.getItem('uncount2'));
        unlikecount.innerHTML = count;
    }
    unlikeButton.addEventListener("click",
    function(){
      count +=1;
      unlikecount.innerHTML = count;
      localStorage.setItem('uncount2',count);
    })};
  
  //------------------------- add blog buttons---------------//
  


