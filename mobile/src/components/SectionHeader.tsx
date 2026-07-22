import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

type Props = {
  title: string;
  action?: string;
  onAction?: () => void;
};

export function SectionHeader({ title, action, onAction }: Props) {
  return (
    <View style={styles.row}>
      <Text variant="titleMedium" style={styles.title}>
        {title}
      </Text>
      {action ? <Button compact mode="text" onPress={onAction}>{action}</Button> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontWeight: '800', letterSpacing: 0 },
});
