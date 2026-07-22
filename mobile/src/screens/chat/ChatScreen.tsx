import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Badge, Button, Surface, Text, useTheme } from 'react-native-paper';
import { CheckCheck, MessageSquarePlus, Radio, Users } from 'lucide-react-native';
import { AppHeader } from '../../components/AppHeader';
import { Screen } from '../../components/Screen';
import { chats } from '../../data/mockData';

export function ChatScreen() {
  const theme = useTheme();

  return (
    <Screen>
      <AppHeader title="Chat" subtitle="Personal, departments, clubs" />
      <View style={styles.actions}>
        <Button mode="contained" icon={({ color }) => <MessageSquarePlus color={color} size={18} />}>New chat</Button>
        <Button mode="outlined" icon={({ color }) => <Users color={color} size={18} />}>Groups</Button>
      </View>
      <Surface style={[styles.liveCard, { backgroundColor: theme.colors.surfaceVariant }]} elevation={0}>
        <Radio color={theme.colors.primary} size={22} />
        <View style={{ flex: 1 }}>
          <Text variant="titleMedium" style={styles.strong}>Socket.IO ready</Text>
          <Text style={{ color: theme.colors.onSurfaceVariant }}>Typing indicators, read receipts, and live groups connect here later.</Text>
        </View>
      </Surface>
      {chats.map(thread => (
        <Surface key={thread.id} style={[styles.thread, { borderColor: theme.colors.outline }]} elevation={0}>
          <Avatar.Text size={46} label={thread.title.split(' ').map(part => part[0]).join('').slice(0, 2)} />
          <View style={{ flex: 1 }}>
            <View style={styles.threadTitle}>
              <Text variant="titleMedium" style={styles.strong}>{thread.title}</Text>
              {thread.group ? <Users size={16} color={theme.colors.onSurfaceVariant} /> : null}
            </View>
            <Text numberOfLines={1} style={{ color: theme.colors.onSurfaceVariant }}>
              {thread.typing ? 'typing...' : thread.subtitle}
            </Text>
          </View>
          <View style={styles.receipt}>
            <CheckCheck size={18} color={theme.colors.primary} />
            {thread.unread ? <Badge>{thread.unread}</Badge> : null}
          </View>
        </Surface>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  actions: { flexDirection: 'row', gap: 10 },
  liveCard: { borderRadius: 8, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 12 },
  thread: { borderWidth: 1, borderRadius: 8, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 12 },
  threadTitle: { flexDirection: 'row', gap: 6, alignItems: 'center' },
  strong: { fontWeight: '800', letterSpacing: 0 },
  receipt: { alignItems: 'flex-end', gap: 8 },
});
