import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function ChatDiaryPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, input]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>{item}</Text>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.messageContainer}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="오늘 나는..."
          placeholderTextColor="#aaa"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendText}>보내기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      padding: 16,
      paddingBottom: 24,
    },
    messageContainer: {
      paddingBottom: 20,
    },
    messageBubble: {
      backgroundColor: '#3A3D40',
      borderRadius: 10,
      padding: 12,
      marginVertical: 6,
      alignSelf: 'flex-start',
      maxWidth: '80%',
    },
    messageText: {
      color: '#fff',
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 'auto',
    },
    input: {
      flex: 1,
      backgroundColor: '#555',
      color: '#fff',
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
    },
    sendButton: {
      backgroundColor: '#35C9A3',
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 8,
    },
    sendText: {
      color: '#fff',
      fontWeight: '600',
    },
  });
  
