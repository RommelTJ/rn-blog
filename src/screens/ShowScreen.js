import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');

  const { state } = useContext(BlogContext);
  const blogPost = state.find(x => x.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
