import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');
  const { state } = useContext(BlogContext);
  const blogPost = state.find(x => x.id === id);

  return <BlogPostForm />;
};

const styles = StyleSheet.create({});

export default EditScreen;
