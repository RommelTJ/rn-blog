import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = (props) => {
  return (
    <BlogContext.Provider>
      { props.children }
    </BlogContext.Provider>
  )
};
