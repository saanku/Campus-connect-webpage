import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Chip, Surface, Text, useTheme } from 'react-native-paper';
import { Bot, Bus, CalendarDays, GraduationCap, IdCard, LucideIcon, Megaphone, QrCode, TrendingUp } from 'lucide-react-native';
import { AppHeader } from '../../components/AppHeader';
import { Screen } from '../../components/Screen';
import { SectionHeader } from '../../components/SectionHeader';
import { StatCard } from '../../components/StatCard';
import { announcements, currentStudent, events, posts } from '../../data/mockData';
import { palette } from '../../theme/colors';

export function HomeScreen() {
  const theme = useTheme();
  const quickActions: Array<[string, LucideIcon]> = [
    ['Study Help', Bot],
    ['Bus', Bus],
    ['Lost & Found', Megaphone],
    ['QR Check-in', QrCode],
  ];

  return (
    <Screen>
      <AppHeader title="Campus" subtitle={`Welcome, ${currentStudent.name}`} />
      <Surface style={[styles.welcome, { backgroundColor: theme.colors.primary }]} elevation={0}>
        <View style={styles.welcomeTop}>
          <View>
            <Text style={styles.lightLabel}>TOCH Connect ID</Text>
            <Text variant="headlineSmall" style={styles.lightTitle}>
              {currentStudent.connectId}
            </Text>
          </View>
          <IdCard color="#FFFFFF" size={32} />
        </View>
        <Text style={styles.lightCopy}>{currentStudent.department} | Semester {currentStudent.semester}</Text>
      </Surface>

      <View style={styles.stats}>
        <StatCard label="Attendance" value={`${currentStudent.attendance}%`} tone={palette.brandSoft} icon={QrCode} />
        <StatCard label="Events" value={`${events.length}`} tone={palette.coralSoft} icon={CalendarDays} />
      </View>
      <View style={styles.stats}>
        <StatCard label="Trending" value={`${posts.filter(post => post.trending).length}`} tone={palette.blueSoft} icon={TrendingUp} />
        <StatCard label="Placements" value="5 new" tone={palette.violetSoft} icon={GraduationCap} />
      </View>

      <SectionHeader title="Quick actions" />
      <View style={styles.actions}>
        {quickActions.map(([label, Icon]) => (
          <Button key={label} mode="outlined" icon={({ color }) => <Icon color={color} size={18} />} style={styles.action}>
            {label}
          </Button>
        ))}
      </View>

      <SectionHeader title="Announcements" action="View all" />
      {announcements.map(item => (
        <Surface key={item.id} style={[styles.listItem, { borderColor: theme.colors.outline }]} elevation={0}>
          <View style={{ flex: 1 }}>
            <Text variant="titleMedium" style={styles.itemTitle}>{item.title}</Text>
            <Text style={{ color: theme.colors.onSurfaceVariant }}>{item.audience} | {item.date}</Text>
          </View>
          <Chip compact mode={item.priority === 'high' ? 'flat' : 'outlined'}>{item.priority}</Chip>
        </Surface>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  welcome: { borderRadius: 8, padding: 18, gap: 12 },
  welcomeTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  lightLabel: { color: '#D1FAE5', fontWeight: '700' },
  lightTitle: { color: '#FFFFFF', fontWeight: '900', letterSpacing: 0 },
  lightCopy: { color: '#ECFDF5' },
  stats: { flexDirection: 'row', gap: 12 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  action: { borderRadius: 8 },
  listItem: { borderWidth: 1, borderRadius: 8, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 12 },
  itemTitle: { fontWeight: '800', letterSpacing: 0 },
});
