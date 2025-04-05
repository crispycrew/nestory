import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import { HomeIcon, GridIcon, ReportIcon, ProfileIcon } from '@/components/Icons';


export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
      backgroundColor: '#25292e',
      },
    }}
  
    >
     <Tabs.Screen
        name="index"
        options={{
          title: '메인',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: '모아보기',
          tabBarIcon: ({ color }) => <GridIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: '리포트',
          tabBarIcon: ({ color }) => <ReportIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: '마이페이지',
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
  
}

    //name="index"는 현재 폴더/index.tsx를 가리킴 title-화면의 제목
    //항상 index.tsx가 페이지 url경로로는 '/'기본 화면임!