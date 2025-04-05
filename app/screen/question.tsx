// app/screen/question.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

export default function QuestionPage() {
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      const response = await fetch('https://your-api-url.com/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('서버 응답 오류');
      }

      setInput('');
      Alert.alert('✅ 전송 성공', '답변이 저장되었어요.');
    } catch (error) {
      console.error('Error sending message:', error);
      Alert.alert('⚠️ 전송 실패', '다시 시도해 주세요.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>오늘의 질문</Text>
      <Text style={styles.subtitle}>"오늘 나를 웃게 한 일은 무엇이었나요?"</Text>

      <TextInput
        placeholder="생각나는 일이 있다면 적어보세요."
        placeholderTextColor="#aaa"
        multiline
        style={styles.input}
        value={input}
        onChangeText={setInput}
      />

      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendText}>보내기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#25292e',
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#3A3D40',
    color: '#fff',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    textAlignVertical: 'top',
    height: 200,
    marginBottom: 16,
  },
  sendButton: {
    backgroundColor: '#FF6B8B',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  sendText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
