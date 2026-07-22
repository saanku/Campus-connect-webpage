import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';

type Props = {
  children: ReactNode;
  scroll?: boolean;
};

export function Screen({ children, scroll = true }: Props) {
  const theme = useTheme();
  const content = <View style={styles.content}>{children}</View>;

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.colors.background }]}>
      {scroll ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  scroll: { paddingBottom: 24 },
  content: { flex: 1, paddingHorizontal: 18, paddingTop: 16, gap: 16 },
});
