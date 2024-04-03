import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Modal, SafeAreaView } from 'react-native';
import Header from './components/Header';
import VideoCard from './components/VideoCard'; 
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Les données de vos vidéos avec des URLs de miniatures aléatoires
  const videoData = [
    {
      title: 'Video a la Une',
      channel: 'Webstart',
      thumbnailUri: 'https://picsum.photos/200/300?random=123654788',
    },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        {videoData.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            channel={video.channel}
            thumbnailUri={video.thumbnailUri}
          />
        ))}
      </ScrollView>
      <NavigationBar onHomePress={() => setShowLogin(true)} onSignUpPress={() => setShowSignUp(true)} />
      <Modal visible={showLogin} animationType="slide" onRequestClose={() => setShowLogin(false)} transparent={true}>
        <View style={styles.modalView}>
          <LoginForm onLogin={() => setShowLogin(false)} />
        </View>
      </Modal>
      <Modal visible={showSignUp} animationType="slide" onRequestClose={() => setShowSignUp(false)} transparent={true}>
        <View style={styles.modalView}>
          <SignUpForm onSignUp={() => setShowSignUp(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});