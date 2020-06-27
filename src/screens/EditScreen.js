import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');
  const { state } = useContext(BlogContext);
  const blogPost = state.find(x => x.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput value={title} onChangeText={setTitle} />
      <Text>Edit Content:</Text>
      <TextInput value={content} onChangeText={setContent} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
