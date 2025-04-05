import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function MyPage() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 프로필 섹션 */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.profileText}>
          <Text style={styles.username}>바삭한 놈들</Text>
          <Text style={styles.subtitle}>마인디와 함께한 지 1일째</Text>
        </View>
      </View>

      {/* 메뉴 섹션 */}
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/screen/stats')}>
          <Text style={styles.menuText}>📊 내 감정 통계</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/screen/history')}>
          <Text style={styles.menuText}>📝 질문 기록 보기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/screen/settings')}>
          <Text style={styles.menuText}>⚙️ 설정</Text>
        </TouchableOpacity>
      </View>

      {/* 구분선 */}
      <View style={styles.separator} />

      {/* 정보 표시 섹션 (비터치) */}
      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>📬 의견 보내기</Text>
          <Text style={styles.infoText}>kongkong665123@naver.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>ℹ️ 버전 정보</Text>
          <Text style={styles.infoText}>v1.0.0</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>🚪 로그아웃</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#1c1c1e',
    flexGrow: 1,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#61dafb',
    marginBottom: 12,
  },
  profileText: {
    alignItems: 'center',
  },
  username: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  menuSection: {
    marginBottom: 24,
  },
  menuItem: {
    backgroundColor: '#2a2f35',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    marginVertical: 24,
  },
  infoSection: {
    gap: 16,
  },
  infoItem: {
    backgroundColor: '#292d32',
    padding: 12,
    borderRadius: 10,
  },
  infoLabel: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  infoText: {
    color: '#888',
    fontSize: 13,
  },
});
