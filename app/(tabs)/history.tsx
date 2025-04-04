import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import CalendarPicker from 'react-native-calendar-picker';

export default function ArchiveScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 나의 마인디 일기 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>나의 마인디 일기</Text>
        <TouchableOpacity onPress={() => router.push('/screen/diary')} activeOpacity={0.8}>
          <View style={styles.calendarWrapper}>
            <CalendarPicker
              onDateChange={(date) => setSelectedDate(date)}
              selectedDayColor="#4CAF50"
              selectedDayTextColor="#fff"
              todayBackgroundColor="#555"
              textStyle={{ color: '#fff' }}
              width={320}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* 나의 질문 답변 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>나의 질문 답변</Text>
        <TouchableOpacity onPress={() => router.push('/screen/questions')} activeOpacity={0.8}>
          <View style={styles.calendarWrapper}>
            <CalendarPicker
              onDateChange={(date) => setSelectedDate(date)}
              selectedDayColor="#03A9F4"
              selectedDayTextColor="#fff"
              todayBackgroundColor="#555"
              textStyle={{ color: '#fff' }}
              width={320}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#121212',
    flexGrow: 1,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  calendarWrapper: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
});
