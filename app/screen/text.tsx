import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Tag from '@/components/Tag';
import { Stack } from 'expo-router';

export const options = {
    headerShown: false,
  };
  


export default function TextDiaryPage() {
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
        />
      </View>
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
  },
  input: {
    backgroundColor: '#555',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    textAlignVertical: 'top', // Android에서 multiline 제대로 보이게
  },
});

