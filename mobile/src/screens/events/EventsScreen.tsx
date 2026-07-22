import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Chip, Surface, Text, useTheme } from 'react-native-paper';
import { Award, CalendarPlus, Images, QrCode } from 'lucide-react-native';
import { AppHeader } from '../../components/AppHeader';
import { Screen } from '../../components/Screen';
import { events } from '../../data/mockData';

export function EventsScreen() {
  const theme = useTheme();

  return (
    <Screen>
      <AppHeader title="Events" subtitle="Register, check in, collect certificates" />
      {events.map(event => (
        <Surface key={event.id} style={[styles.event, { borderColor: theme.colors.outline }]} elevation={0}>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text variant="titleLarge" style={styles.strong}>{event.title}</Text>
              <Text style={{ color: theme.colors.onSurfaceVariant }}>{event.club} | {event.date} | {event.venue}</Text>
            </View>
            <Chip>{event.status}</Chip>
          </View>
          <Text>{event.registered} students registered</Text>
          <View style={styles.actions}>
            <Button mode="contained" icon={({ color }) => <CalendarPlus color={color} size={18} />}>Register</Button>
            <Button mode="outlined" icon={({ color }) => <QrCode color={color} size={18} />}>QR</Button>
            <Button mode="outlined" icon={({ color }) => <Award color={color} size={18} />}>Certificate</Button>
            <Button mode="text" icon={({ color }) => <Images color={color} size={18} />}>Gallery</Button>
          </View>
        </Surface>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  event: { borderWidth: 1, borderRadius: 8, padding: 14, gap: 14 },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  strong: { fontWeight: '900', letterSpacing: 0 },
});
