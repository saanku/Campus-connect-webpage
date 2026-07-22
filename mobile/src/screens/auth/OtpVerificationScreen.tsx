import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, TextInput } from 'react-native-paper';
import { Screen } from '../../components/Screen';
import { currentStudent } from '../../data/mockData';
import { AuthStackParamList } from '../../navigation/types';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/slices/authSlice';

type Props = NativeStackScreenProps<AuthStackParamList, 'OtpVerification'>;

export function OtpVerificationScreen({ route }: Props) {
  const dispatch = useAppDispatch();
  const [otp, setOtp] = useState('2026');

  return (
    <Screen>
      <Text variant="headlineMedium" style={styles.title}>
        OTP verification
      </Text>
      <Text>Enter the verification code sent to {route.params?.email ?? 'your college email'}.</Text>
      <TextInput mode="outlined" label="4 digit OTP" value={otp} onChangeText={setOtp} keyboardType="number-pad" maxLength={4} />
      <Button mode="contained" contentStyle={styles.button} onPress={() => dispatch(login({ user: currentStudent, token: 'demo-token' }))}>
        Activate TOCH Connect ID
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontWeight: '900', letterSpacing: 0 },
  button: { height: 52 },
});
