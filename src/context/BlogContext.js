import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = (props) => {
  return (
    <BlogContext.Provider value={"hi there"}>
      { props.children }
    </BlogContext.Provider>
  )
};

export default BlogContext;
