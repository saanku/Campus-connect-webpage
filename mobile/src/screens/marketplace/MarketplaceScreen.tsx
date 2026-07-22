import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Chip, Searchbar, Surface, Text, useTheme } from 'react-native-paper';
import { MessageCircle, Plus, ShieldAlert } from 'lucide-react-native';
import { AppHeader } from '../../components/AppHeader';
import { Screen } from '../../components/Screen';
import { listings } from '../../data/mockData';

export function MarketplaceScreen() {
  const theme = useTheme();
  const [category, setCategory] = useState('All');

  return (
    <Screen>
      <AppHeader title="Marketplace" subtitle="Books, electronics, hostel items" />
      <Searchbar placeholder="Search items near campus" value="" onChangeText={() => {}} />
      <View style={styles.filters}>
        {['All', 'Books', 'Electronics', 'Hostel'].map(item => (
          <Chip key={item} selected={category === item} onPress={() => setCategory(item)}>{item}</Chip>
        ))}
      </View>
      <Button mode="contained" icon={({ color }) => <Plus color={color} size={18} />} contentStyle={styles.primary}>
        Sell an item
      </Button>
      {listings.map(item => (
        <Surface key={item.id} style={[styles.listing, { borderColor: theme.colors.outline }]} elevation={0}>
          <View style={[styles.preview, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Text>{item.category}</Text>
          </View>
          <View style={{ flex: 1, gap: 6 }}>
            <View style={styles.row}>
              <Text variant="titleMedium" style={styles.strong}>{item.title}</Text>
              {!item.approved ? <ShieldAlert size={18} color={theme.colors.error} /> : null}
            </View>
            <Text style={{ color: theme.colors.onSurfaceVariant }}>Seller: {item.seller}</Text>
            <Text variant="titleMedium" style={{ color: theme.colors.primary, fontWeight: '900' }}>{item.price}</Text>
            <Button mode="outlined" icon={({ color }) => <MessageCircle color={color} size={18} />}>Chat with seller</Button>
          </View>
        </Surface>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  filters: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  primary: { height: 50 },
  listing: { borderWidth: 1, borderRadius: 8, padding: 12, flexDirection: 'row', gap: 12 },
  preview: { width: 92, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  strong: { flex: 1, fontWeight: '800', letterSpacing: 0 },
});
