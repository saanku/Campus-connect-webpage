import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, TextInput } from 'react-native-paper';
import { Screen } from '../../components/Screen';
import { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>;

export function ForgotPasswordScreen({ navigation }: Props) {
  return (
    <Screen>
      <Text variant="headlineMedium" style={styles.title}>
        Reset password
      </Text>
      <TextInput mode="outlined" label="College email" keyboardType="email-address" autoCapitalize="none" />
      <Button mode="contained" contentStyle={styles.button} onPress={() => navigation.navigate('OtpVerification', {})}>
        Send OTP
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontWeight: '900', letterSpacing: 0 },
  button: { height: 52 },
});
