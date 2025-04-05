import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ReportScreen() {
  const router = useRouter();
  const [month, setMonth] = useState('2025년 03월'); // 기본 월 설정

  const changeMonth = (direction: 'prev' | 'next') => {
    console.log(direction === 'prev' ? '이전 달' : '다음 달');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* 상단 월 선택 */}
          <View style={styles.monthSelector}>
            <TouchableOpacity onPress={() => changeMonth('prev')}>
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.monthText}>{month}</Text>
            <TouchableOpacity onPress={() => changeMonth('next')}>
              <Ionicons name="chevron-forward" size={24} color="#fff" />
            </TouchableOpacity>
          </View>


          {/* 기본 감정 분포 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>한 눈에 보는 기본 분포</Text>
            <Text style={styles.description}>채팅형 일기와 함께 기록한 기분을 한 눈에 볼 수 있어요.</Text>

            <View style={styles.graphContainer}>
              <View style={styles.emotionRow}>

          {/* 감정 막대 그래프 + 라벨 수평 정렬 */}
          <View style={styles.graphContainer}>
            <View style={styles.barGraphAligned}>
            {[
              { height: '80%' as `${number}%`, color: '#FFA500', label: '최고' },
              { height: '60%' as `${number}%`, color: '#FF69B4', label: '좋음' },
              { height: '40%' as `${number}%`, color: '#ADD8E6', label: '보통' },
              { height: '20%' as `${number}%`, color: '#6495ED', label: '별로' },
              { height: '10%' as `${number}%`, color: '#DC143C', label: '최악' },
            ].map((item, index) => (
              <View key={index} style={styles.barWithLabel}>
                <View style={[styles.barItem, { height: item.height, backgroundColor: item.color }]} />
                <Text style={styles.emotionText}>{item.label}</Text>
              </View>
            ))}

            </View>
          </View>
              </View>
            </View>
          </View>

          {/* 기본별 상세 감정 분포 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>기본별 상세 감정 분포</Text>
            <Text style={styles.description}>기록한 기분의 자세한 감정을 확인할 수 있어요.</Text>

            <View style={styles.emptyState}>
              <Text style={styles.noDataText}>이번 달에 일기가</Text>
              <Text style={styles.highlightText}>작성되지 않았어요.</Text>
              <Text style={styles.description}>일기를 작성하면 리포트가 발행돼요!</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// 감정 아이콘 컴포넌트
const EmotionIcon = ({ label, color }: { label: string; color: string }) => (
  <View style={[styles.emotionIcon, { backgroundColor: color }]}>
    <Text style={styles.emotionText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  graphContainer: {
    alignItems: 'center',
  },
  barGraphAligned: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    height: 180,
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  barWithLabel: {
    alignItems: 'center',
    width: 40,
  },
  barItem: {
    width: 16,
    borderRadius: 4,
  },
  section: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 10,
  },
  graphPlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#333',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  graphText: {
    color: '#888',
  },
  emotionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  emotionIcon: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  emotionText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 20,
  },
  noDataText: {
    color: '#ccc',
    fontSize: 16,
  },
  highlightText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
