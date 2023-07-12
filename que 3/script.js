const loader = document.getElementById('loader');
const dataContainer = document.getElementById('data-container');


loader.style.display = 'block';

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    
    loader.style.display = 'none';

    
    data.forEach(item => {
      const post = document.createElement('div');
      post.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      `;
      dataContainer.appendChild(post);
    });
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
