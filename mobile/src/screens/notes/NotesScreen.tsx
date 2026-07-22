import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Chip, Searchbar, Surface, Text, useTheme } from 'react-native-paper';
import { Download, FileUp, Filter } from 'lucide-react-native';
import { AppHeader } from '../../components/AppHeader';
import { Screen } from '../../components/Screen';
import { notes } from '../../data/mockData';

export function NotesScreen() {
  const theme = useTheme();
  const [semester, setSemester] = useState(5);

  return (
    <Screen>
      <AppHeader title="Notes" subtitle="Semester-wise PDFs" />
      <Searchbar placeholder="Search subject, title, uploader" value="" onChangeText={() => {}} />
      <View style={styles.filters}>
        {[3, 4, 5, 6, 7].map(item => (
          <Chip key={item} selected={semester === item} onPress={() => setSemester(item)}>S{item}</Chip>
        ))}
        <Button mode="outlined" icon={({ color }) => <Filter color={color} size={18} />}>Subject</Button>
      </View>
      <Button mode="contained" icon={({ color }) => <FileUp color={color} size={18} />} contentStyle={styles.upload}>
        Upload PDF notes
      </Button>
      {notes.map(note => (
        <Surface key={note.id} style={[styles.note, { borderColor: theme.colors.outline }]} elevation={0}>
          <View style={{ flex: 1 }}>
            <Text variant="titleMedium" style={styles.strong}>{note.title}</Text>
            <Text style={{ color: theme.colors.onSurfaceVariant }}>{note.subject} | Semester {note.semester} | By {note.uploadedBy}</Text>
            <Text style={{ color: theme.colors.primary, marginTop: 6 }}>{note.downloads} downloads</Text>
          </View>
          <Button mode="outlined" icon={({ color }) => <Download color={color} size={18} />}>Get</Button>
        </Surface>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  filters: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  upload: { height: 50 },
  note: { borderWidth: 1, borderRadius: 8, padding: 14, flexDirection: 'row', gap: 10, alignItems: 'center' },
  strong: { fontWeight: '800', letterSpacing: 0 },
});
