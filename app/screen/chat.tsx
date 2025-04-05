import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function ChatDiaryPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  // 메시지를 서버로 POST 요청하는 함수
  const sendMessageToServer = async (message: string) => {
    try {
      const response = await fetch('https://your-api-url.com/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('메시지 전송 실패');
      }

      const result = await response.json();
      console.log('서버 응답:', result);
    } catch (error) {
      console.error('API 전송 오류:', error);
    }
  };

  // 보내기 버튼 눌렀을 때 실행되는 함수
  const handleSend = async () => {
    if (input.trim()) {
      const newMessage = input.trim();
      setMessages((prev) => [...prev, newMessage]);
      setInput('');

      await sendMessageToServer(newMessage); // 서버에 메시지 전송
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
