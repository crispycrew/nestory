import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Stack } from 'expo-router';

export const options = {
  headerShown: false,
};

export default function TextDiaryPage() {
  const [input, setInput] = useState('');


    const handleSend = async () => {
      if (!input.trim()) return;

      try {
        const response = await fetch('http://203.255.81.132:10258/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: input }),
        });
      
        if (!response.ok) {
          throw new Error('서버 응답 오류');
        }
      
        const data = await response.json(); // 응답을 JSON으로 파싱
      
        setInput('');
        console.log('✅ 서버 응답:', data); // 콘솔 출력
      
        // 확률 출력 문자열 만들기
        const emotionEmojis: Record<string, string> = {
          '놀람': '😲',
          '분노': '😡',
          '불안': '😰',
          '슬픔': '😢',
          '행복': '😄',
        };
        
        const probText = Object.entries(data.probabilities)
          .map(([emotion, value]) => {
            const percent = Number(value) * 100;
            const emoji = emotionEmojis[emotion] || '';
            return `${emoji} ${emotion} : ${percent.toFixed(1)}%`;
          })
          .join('\n');
        
        Alert.alert(
          `💡 감정 예측 결과: ${data.predicted_emotion} 💡`,
          probText || '서버 응답을 받았습니다.'
        );
        
      
      } catch (error) {
        console.error('Error sending message:', error);
        Alert.alert('⚠️ 전송 실패', '다시 시도해 주세요.');
      }
      
    };
    
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>줄글형 감정 일기</Text>

      <View style={styles.card}>
        <TextInput
          placeholder="오늘 나는 어떤 감정을 느꼈는지 자유롭게 적어보세요."
          placeholderTextColor="#aaa"
          multiline
          numberOfLines={8}
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendText}>보내기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#3A3D40',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#555',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#7CC576',
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
