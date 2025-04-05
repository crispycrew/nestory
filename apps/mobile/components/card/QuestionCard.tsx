import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Tag from '@/components/Tag';

export default function QuestionCard() {
  return (
    <View style={styles.card}>
      <Tag label="오늘의 질문" color="#FF6B8B" />
      <TextInput
        placeholder="오늘의 질문은,"
        placeholderTextColor="#aaa"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3A3D40',
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
  },
  input: {
    backgroundColor: '#555',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
});
