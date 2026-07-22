import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MoreStackParamList } from './types';
import { AdminScreen } from '../screens/admin/AdminScreen';
import { EventsScreen } from '../screens/events/EventsScreen';
import { MarketplaceScreen } from '../screens/marketplace/MarketplaceScreen';
import { MoreScreen } from '../screens/more/MoreScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';

const Stack = createNativeStackNavigator<MoreStackParamList>();

export function MoreNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MoreHome" component={MoreScreen} />
      <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
    </Stack.Navigator>
  );
}
