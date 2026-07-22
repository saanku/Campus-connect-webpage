import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Chip, ProgressBar, Surface, Text, useTheme } from 'react-native-paper';
import { Camera, Edit3, IdCard } from 'lucide-react-native';
import { AppHeader } from '../../components/AppHeader';
import { Screen } from '../../components/Screen';
import { currentStudent } from '../../data/mockData';

export function ProfileScreen() {
  const theme = useTheme();

  return (
    <Screen>
      <AppHeader title="Profile" subtitle="Student identity and achievements" />
      <Surface style={[styles.profile, { borderColor: theme.colors.outline }]} elevation={0}>
        <View style={styles.top}>
          <Avatar.Text size={76} label={currentStudent.avatar} />
          <View style={{ flex: 1 }}>
            <Text variant="headlineSmall" style={styles.name}>{currentStudent.name}</Text>
            <Text style={{ color: theme.colors.onSurfaceVariant }}>{currentStudent.department} | Semester {currentStudent.semester}</Text>
            <View style={styles.idRow}>
              <IdCard size={16} color={theme.colors.primary} />
              <Text style={{ color: theme.colors.primary, fontWeight: '800' }}>{currentStudent.connectId}</Text>
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <Button mode="contained" icon={({ color }) => <Edit3 color={color} size={18} />}>Edit profile</Button>
          <Button mode="outlined" icon={({ color }) => <Camera color={color} size={18} />}>Photo</Button>
        </View>
      </Surface>
      <Surface style={[styles.panel, { borderColor: theme.colors.outline }]} elevation={0}>
        <Text variant="titleMedium" style={styles.strong}>Attendance tracker</Text>
        <ProgressBar progress={currentStudent.attendance / 100} color={theme.colors.primary} style={styles.progress} />
        <Text>{currentStudent.attendance}% this semester</Text>
      </Surface>
      <Surface style={[styles.panel, { borderColor: theme.colors.outline }]} elevation={0}>
        <Text variant="titleMedium" style={styles.strong}>Skills</Text>
        <View style={styles.chips}>
          {currentStudent.skills.map(skill => <Chip key={skill}>{skill}</Chip>)}
        </View>
      </Surface>
      <Surface style={[styles.panel, { borderColor: theme.colors.outline }]} elevation={0}>
        <Text variant="titleMedium" style={styles.strong}>Badges</Text>
        <View style={styles.chips}>
          {currentStudent.badges.map(badge => <Chip key={badge} mode="outlined">{badge}</Chip>)}
        </View>
      </Surface>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profile: { borderWidth: 1, borderRadius: 8, padding: 14, gap: 16 },
  top: { flexDirection: 'row', gap: 14, alignItems: 'center' },
  name: { fontWeight: '900', letterSpacing: 0 },
  idRow: { flexDirection: 'row', gap: 6, alignItems: 'center', marginTop: 6 },
  actions: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  panel: { borderWidth: 1, borderRadius: 8, padding: 14, gap: 12 },
  progress: { height: 10, borderRadius: 8 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  strong: { fontWeight: '800', letterSpacing: 0 },
});
