import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Chip, IconButton, Surface, Text, TextInput, useTheme } from 'react-native-paper';
import { Heart, MessageCircle, Send, Share2, SlidersHorizontal, Video } from 'lucide-react-native';
import { AppHeader } from '../../components/AppHeader';
import { Screen } from '../../components/Screen';
import { posts } from '../../data/mockData';

export function FeedScreen() {
  const theme = useTheme();
  const [filter, setFilter] = useState('All');
  const departments = ['All', 'CSE', 'ECE', 'ME', 'Clubs'];

  return (
    <Screen>
      <AppHeader title="Community" subtitle="Posts, clubs, departments" />
      <Surface style={[styles.composer, { borderColor: theme.colors.outline }]} elevation={0}>
        <TextInput mode="outlined" placeholder="Share an update with campus..." multiline />
        <View style={styles.composerActions}>
          <Button icon="image" mode="outlined">Photo</Button>
          <Button icon={({ color }) => <Video color={color} size={18} />} mode="outlined">Video</Button>
          <Button icon={({ color }) => <Send color={color} size={18} />} mode="contained">Post</Button>
        </View>
      </Surface>
      <View style={styles.filters}>
        {departments.map(item => (
          <Chip key={item} selected={filter === item} onPress={() => setFilter(item)}>
            {item}
          </Chip>
        ))}
        <IconButton icon={({ color }) => <SlidersHorizontal color={color} size={18} />} onPress={() => {}} />
      </View>
      {posts.map(post => (
        <Surface key={post.id} style={[styles.post, { borderColor: theme.colors.outline }]} elevation={0}>
          <View style={styles.authorRow}>
            <Avatar.Text size={42} label={post.author.avatar} />
            <View style={{ flex: 1 }}>
              <Text variant="titleMedium" style={styles.strong}>{post.author.name}</Text>
              <Text style={{ color: theme.colors.onSurfaceVariant }}>{post.department} | {post.createdAt}</Text>
            </View>
            {post.trending ? <Chip compact>Trending</Chip> : null}
          </View>
          <Text style={styles.body}>{post.body}</Text>
          {post.mediaType ? <View style={[styles.media, { backgroundColor: theme.colors.surfaceVariant }]}><Text>{post.mediaType.toUpperCase()} PREVIEW</Text></View> : null}
          <View style={styles.metrics}>
            <Button icon={({ color }) => <Heart color={color} size={18} />} mode="text">{post.likes}</Button>
            <Button icon={({ color }) => <MessageCircle color={color} size={18} />} mode="text">{post.comments}</Button>
            <Button icon={({ color }) => <Share2 color={color} size={18} />} mode="text">{post.shares}</Button>
          </View>
        </Surface>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  composer: { borderWidth: 1, borderRadius: 8, padding: 12, gap: 12 },
  composerActions: { flexDirection: 'row', gap: 8, justifyContent: 'flex-end', flexWrap: 'wrap' },
  filters: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', alignItems: 'center' },
  post: { borderWidth: 1, borderRadius: 8, padding: 14, gap: 12 },
  authorRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  strong: { fontWeight: '800', letterSpacing: 0 },
  body: { fontSize: 15, lineHeight: 22 },
  media: { height: 160, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  metrics: { flexDirection: 'row', justifyContent: 'space-between' },
});
