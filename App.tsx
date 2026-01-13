import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  // Variable to manage modal visibility:
  // false - modal is hidden
  // true - modal is visible

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Week 2 Task - Modal
      </Text>

      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.link}>Show modal message</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              This is a modal...
            </Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.link}>Close modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    fontSize: 16,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1, // Fill the whole screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 250,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

/* 
modalOverlay and modalContent
Two layers:
- modalOverlay the background layer 
  <View style={styles.modalOverlay}>
A full-screen invisible layer that sits on top of the app, it covers the whole screen
Without this view the modal content would appear in the top-left corner, there wouldn't be background dimming and layour control would be poor

- modalContent is the modal box itself
  <View style={styles.modalContent}>
It is the box the user sees and interacts with, it holds the text and buttons
It defines size, padding, background, and shape

Why do we need these 2 Views?
modalOverlay -> Full-screen positioning & background
modalContent -> Visual box
It makes the UI easier to understand, to style and to maintain
*/

