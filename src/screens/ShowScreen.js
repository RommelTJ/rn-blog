import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');

  return (
    <View>
      <Text>Show Screen - ID: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
