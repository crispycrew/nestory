// EmotionDiaryButtons.tsx 
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Tag from '@/components/Tag';

export default function EmotionDiaryButtons() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 채팅형 버튼 */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: '#3A3D40' }]}
        onPress={() => router.push('/screen/chat')}
      >
        <Tag label="채팅형" color="#35C9A3" />
        <Text style={styles.text}>지금 내 마음은…</Text>
      </TouchableOpacity>

      {/* 줄글형 버튼 */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: '#3A3D40' }]}
        onPress={() => router.push('/screen/text')}
      >
        <Tag label="줄글형" color="#7CC576" />
        <Text style={styles.text}>오늘 나는,</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginBottom: 24,
  },
  card: {
    borderRadius: 12,
    padding: 15,
    marginVertical: 4,
  },
  text: {
    backgroundColor: '#555',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
});
