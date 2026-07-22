import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Surface, Text, useTheme } from 'react-native-paper';
import { CalendarDays, LayoutDashboard, MapPin, ShoppingBag, UserRound } from 'lucide-react-native';
import { AppHeader } from '../../components/AppHeader';
import { Screen } from '../../components/Screen';
import { MoreStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<MoreStackParamList, 'MoreHome'>;

export function MoreScreen({ navigation }: Props) {
  const theme = useTheme();
  const items = [
    ['Marketplace', ShoppingBag, () => navigation.navigate('Marketplace')],
    ['Events', CalendarDays, () => navigation.navigate('Events')],
    ['Profile', UserRound, () => navigation.navigate('Profile')],
    ['Admin Panel', LayoutDashboard, () => navigation.navigate('Admin')],
    ['Lost & Found', MapPin, () => {}],
  ] as const;

  return (
    <Screen>
      <AppHeader title="More" subtitle="Campus tools and admin" />
      <View style={styles.grid}>
        {items.map(([label, Icon, onPress]) => (
          <Surface key={label} style={[styles.tile, { borderColor: theme.colors.outline }]} elevation={0}>
            <Icon size={26} color={theme.colors.primary} />
            <Text variant="titleMedium" style={styles.strong}>{label}</Text>
            <Button mode="text" onPress={onPress}>Open</Button>
          </Surface>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  tile: { width: '47.8%', minHeight: 142, borderWidth: 1, borderRadius: 8, padding: 14, justifyContent: 'space-between' },
  strong: { fontWeight: '800', letterSpacing: 0 },
});
