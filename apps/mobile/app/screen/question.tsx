// app/screen/question.tsx
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function QuestionPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>오늘의 질문</Text>
      <Text style={styles.subtitle}>"오늘 나를 웃게 한 일은 무엇이었나요?"</Text>
      <TextInput
        placeholder="생각나는 일이 있다면 적어보세요."
        placeholderTextColor="#aaa"
        multiline
        style={styles.input}
      />
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
  },
});
