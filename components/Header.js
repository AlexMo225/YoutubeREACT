import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>YouTube</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon name="notifications-none" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={25} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60, 
  },
  icon: {
    marginLeft: 10, 
  },
});

export default Header;