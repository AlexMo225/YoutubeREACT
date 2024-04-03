import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const VideoCard = ({ title, channel, thumbnailUri }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.thumbnail}
        source={{ uri: thumbnailUri }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.channel}>{channel}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
    
  },
  infoContainer: {
    padding: 10,
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  channel: {
    fontSize: 14,
    color: 'grey',
   
  },
  
});

export default VideoCard;
