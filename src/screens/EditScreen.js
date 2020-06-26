import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');
  return (
    <View>
      <Text>Edit Screen - {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
