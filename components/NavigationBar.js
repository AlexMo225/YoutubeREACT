import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavigationBar = ({ onHomePress, onSignUpPress }) => {
  
  return (
    <View style={styles.navigation}>
     
      <TouchableOpacity onPress={onHomePress} style={styles.navItem}>
        <Icon name="home" size={24} color="red" />
        <Text style={styles.navText}>Accueil</Text>
      </TouchableOpacity>

     
      <TouchableOpacity onPress={onSignUpPress} style={styles.navItem}>
        <Icon name="user-plus" size={24} color="grey" />
        <Text style={styles.navText}>Inscription</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.navItem}>
        <Icon name="film" size={24} color="grey" />
        <Text style={styles.navText}>Shorts</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.navItem}>
        <Icon name="youtube-play" size={24} color="red" />
        <Text style={styles.navText}>Abonnements</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onSignUpPress} style={styles.navItem}>
        <Icon name="user" size={24} color="grey" />
        <Text style={styles.navText}>Se Connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: 'grey',
    marginTop: 4,
  },

});

export default NavigationBar;
