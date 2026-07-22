import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, IconButton, Text, useTheme } from 'react-native-paper';
import { Bell, Moon, Search, Sun } from 'lucide-react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleDarkMode } from '../store/slices/preferencesSlice';

type Props = {
  title: string;
  subtitle?: string;
  showSearch?: boolean;
};

export function AppHeader({ title, subtitle, showSearch = true }: Props) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(state => state.preferences.darkMode);
  const user = useAppSelector(state => state.auth.user);
  const ModeIcon = darkMode ? Sun : Moon;

  return (
    <View style={styles.row}>
      <View style={styles.titleBlock}>
        <Text variant="headlineSmall" style={styles.title}>
          {title}
        </Text>
        {subtitle ? <Text style={{ color: theme.colors.onSurfaceVariant }}>{subtitle}</Text> : null}
      </View>
      {showSearch ? <IconButton icon={() => <Search size={20} color={theme.colors.onSurface} />} onPress={() => {}} /> : null}
      <IconButton icon={() => <Bell size={20} color={theme.colors.onSurface} />} onPress={() => {}} />
      <IconButton icon={() => <ModeIcon size={20} color={theme.colors.onSurface} />} onPress={() => dispatch(toggleDarkMode())} />
      <Avatar.Text size={38} label={user?.avatar ?? 'TC'} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  titleBlock: { flex: 1 },
  title: { fontWeight: '800', letterSpacing: 0 },
});
