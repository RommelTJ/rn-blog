import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');

  const { state } = useContext(BlogContext);
  const blogPost = state.find(x => x.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = (props) => {
  const { navigation } = props;
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
