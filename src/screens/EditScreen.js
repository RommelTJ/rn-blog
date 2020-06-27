import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find(x => x.id === id);

  return (
    <BlogPostForm
      onSubmit={(title, content) => editBlogPost(id, title, content, () => navigation.pop())}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
