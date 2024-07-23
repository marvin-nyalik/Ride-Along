import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import the icon library you want to use

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="home" size={24} color="#000" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <MaterialIcons name="settings" size={24} color="#000" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust this to space-between
    paddingHorizontal: 16, // Add some padding if needed
    width: '100%'
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    color: '#000',
  },
});

export default CustomHeader;
