import React from 'react';
import { TouchableOpacity, TextInput, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import Tag from '@/components/Tag';

export default function QuestionDiaryButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push('/screen/question')}
      style={styles.card}
      activeOpacity={0.8}
    >
      <View>
        <Tag label="오늘의 질문" color="#FF6B8B" />
        <TextInput
          placeholder="오늘의 질문은,"
          placeholderTextColor="#aaa"
          editable={false}
          style={styles.input}
          pointerEvents="none" // 터치 못하게
        />
      </View>
    </TouchableOpacity>
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
