import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TitleWithTooltipProps {
  title: string;
  tooltip: string;
}

export default function TitleWithTooltip({ title, tooltip }: TitleWithTooltipProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.tooltip}>❓ {tooltip}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tooltip: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
});
