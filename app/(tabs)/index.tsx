// app/index.tsx
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import EmotionDiaryButtons from '@/components/button/EmotionDiaryButtons'
import QuestionDiaryButton from '@/components/button/QuestionDiaryButton'
import TitleWithTooltip from '@/components/TitleWithTooltip';

export default function HomePage() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>오늘의 감정 일기</Text>

        <View>
            <TitleWithTooltip title="감정일기" tooltip="오늘 하루 나의 감정에 대해 작성해 보세요." />
        </View>
      <EmotionDiaryButtons />

          <View>
            <TitleWithTooltip title="질문답변" tooltip="하루 하나의 질문으로 나에 대해 알아 보세요." />
            <QuestionDiaryButton/>
          </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#25292e',
    flexGrow: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 24,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
