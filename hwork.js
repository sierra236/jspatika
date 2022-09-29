const posts = [
    { name: "Post", description: "Details" },
    { name: "Post 2", description: "Details 2" },
    { name: "Post 3", description: "Details 3" },
    { name: "Post 4", description: "Details 4" },
  ];
  const listPosts = () => {
    posts.forEach((item) => console.log(item.name));
  };
  
  const addPost = (newPost) => {
    return new Promise((res, rej) => {
      if (newPost) {
        posts.push(newPost);
        res(newPost);
      } else {
        rej("New post not found");
      }
    });
  };
  
  const showPosts = async () => {
    try {
      let addedPost = await addPost({
        name: "Post 5",
        description: "Detail 5",
      });
      addedPost && listPosts();
    } catch (err) {
      console.log("ERROR:", err);
    }
  };
  showPosts();