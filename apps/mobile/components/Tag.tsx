import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TagProps {
  label: string;
  color: string;
}

export default function Tag({ label, color }: TagProps) {
  return (
    <View style={[styles.tag, { backgroundColor: color }]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
