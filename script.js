function addPost() {
    const newPostContent = document.getElementById('newPost').value;
    const timeline = document.getElementById('timeline'); 
    if (newPostContent.trim() === "") {
      alert("Please write something to post!");
      return;
    }
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    const userName = "<strong>John Doe</strong>";
    const timestamp = new Date().toLocaleString();
    postDiv.innerHTML = `
      <p>${userName}</p>
      <p>${newPostContent}</p>
      <span class="timestamp">${timestamp}</span>
    `;
    timeline.prepend(postDiv);
    document.getElementById('newPost').value = '';
  }
