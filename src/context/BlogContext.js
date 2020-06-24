import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = (props) => {
  const blogPosts = [
    { title: "Blog Post 1" },
    { title: "Blog Post 2" },
    { title: "Blog Post 3" }
  ];

  return (
    <BlogContext.Provider value={blogPosts}>
      { props.children }
    </BlogContext.Provider>
  )
};

export default BlogContext;
