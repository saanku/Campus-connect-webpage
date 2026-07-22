import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bell, BookOpen, Home, MessageCircle, MoreHorizontal, Users } from 'lucide-react-native';
import { useTheme } from 'react-native-paper';
import { MainTabParamList } from './types';
import { ChatScreen } from '../screens/chat/ChatScreen';
import { FeedScreen } from '../screens/feed/FeedScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { MoreNavigator } from './MoreNavigator';
import { NotesScreen } from '../screens/notes/NotesScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const icons = {
  Home,
  Feed: Users,
  Chat: MessageCircle,
  Notes: BookOpen,
  More: MoreHorizontal,
};

export function MainTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const Icon = icons[route.name] ?? Bell;
        return {
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
          tabBarStyle: {
            height: 68,
            paddingTop: 8,
            paddingBottom: 10,
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.outline,
          },
          tabBarLabelStyle: { fontSize: 12, fontWeight: '700' },
          tabBarIcon: ({ color, size }) => <Icon color={color} size={size} strokeWidth={2.4} />,
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="More" component={MoreNavigator} />
    </Tab.Navigator>
  );
}
