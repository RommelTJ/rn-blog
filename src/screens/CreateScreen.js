import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput value={title} onChangeText={setTitle}/>
      <Text>Enter Content:</Text>
      <TextInput value={content} onChangeText={setContent} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
