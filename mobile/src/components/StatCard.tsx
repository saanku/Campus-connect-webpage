import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { LucideIcon } from 'lucide-react-native';

type Props = {
  label: string;
  value: string;
  tone: string;
  icon: LucideIcon;
};

export function StatCard({ label, value, tone, icon: Icon }: Props) {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outline }]}>
      <View style={[styles.iconWrap, { backgroundColor: tone }]}>
        <Icon size={18} color="#111827" />
      </View>
      <Text variant="titleLarge" style={styles.value}>
        {value}
      </Text>
      <Text style={{ color: theme.colors.onSurfaceVariant }}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, minHeight: 116, borderWidth: 1, borderRadius: 8, padding: 14, justifyContent: 'space-between' },
  iconWrap: { width: 34, height: 34, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  value: { fontWeight: '800', letterSpacing: 0 },
});
