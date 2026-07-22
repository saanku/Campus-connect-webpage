import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, DataTable, Surface, Text, useTheme } from 'react-native-paper';
import { Ban, CheckCircle2, Eye, Megaphone, Trash2 } from 'lucide-react-native';
import { AppHeader } from '../../components/AppHeader';
import { Screen } from '../../components/Screen';
import { SectionHeader } from '../../components/SectionHeader';
import { listings, posts, students } from '../../data/mockData';

export function AdminScreen() {
  const theme = useTheme();

  return (
    <Screen>
      <AppHeader title="Admin" subtitle="Moderation and campus control" />
      <View style={styles.actions}>
        <Button mode="contained" icon={({ color }) => <Megaphone color={color} size={18} />}>Add announcement</Button>
        <Button mode="outlined" icon={({ color }) => <Eye color={color} size={18} />}>Audit view</Button>
      </View>
      <Surface style={[styles.panel, { borderColor: theme.colors.outline }]} elevation={0}>
        <SectionHeader title="Students" action="Search" />
        <DataTable>
          {students.map(student => (
            <DataTable.Row key={student.id}>
              <DataTable.Cell>{student.name}</DataTable.Cell>
              <DataTable.Cell>{student.connectId}</DataTable.Cell>
              <DataTable.Cell numeric>{student.attendance}%</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
        <Button mode="outlined" icon={({ color }) => <Ban color={color} size={18} />}>Ban selected user</Button>
      </Surface>
      <Surface style={[styles.panel, { borderColor: theme.colors.outline }]} elevation={0}>
        <SectionHeader title="Content moderation" />
        <Text>{posts.length} posts visible to admin review, including reports and delete controls.</Text>
        <View style={styles.actions}>
          <Button mode="outlined" icon={({ color }) => <Trash2 color={color} size={18} />}>Delete post</Button>
          <Button mode="outlined">View comments</Button>
        </View>
      </Surface>
      <Surface style={[styles.panel, { borderColor: theme.colors.outline }]} elevation={0}>
        <SectionHeader title="Marketplace approvals" />
        {listings.filter(item => !item.approved).map(item => (
          <View key={item.id} style={styles.report}>
            <View style={{ flex: 1 }}>
              <Text variant="titleMedium" style={styles.strong}>{item.title}</Text>
              <Text style={{ color: theme.colors.onSurfaceVariant }}>{item.category} | {item.seller}</Text>
            </View>
            <Button mode="contained" icon={({ color }) => <CheckCircle2 color={color} size={18} />}>Approve</Button>
          </View>
        ))}
      </Surface>
    </Screen>
  );
}

const styles = StyleSheet.create({
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  panel: { borderWidth: 1, borderRadius: 8, padding: 14, gap: 12 },
  report: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  strong: { fontWeight: '800', letterSpacing: 0 },
});
