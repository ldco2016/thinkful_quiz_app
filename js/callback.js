// First way to do it
var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
  ];

function handlePosts() {
  posts.forEach(function(post) {
    savePost(post);
  });
}

function savePost(post){
  console.log('saving post:' + post.title);
}


handlePosts(); // don't forget to call the function to se something in the console :)

// Second way to do it.
function handlePosts() {
  var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach(function(post) {
      console.log(post);
    });
}

// Third way to do it
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach(function(post) {
      savePost(post);
    });
}
handlePosts();
function savePost(posts){
  console.log(posts);
}
