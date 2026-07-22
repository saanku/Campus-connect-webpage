import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, SegmentedButtons, Text, TextInput } from 'react-native-paper';
import { Screen } from '../../components/Screen';
import { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

export function SignupScreen({ navigation }: Props) {
  const [department, setDepartment] = useState('CSE');

  return (
    <Screen>
      <Text variant="headlineMedium" style={styles.title}>
        Student signup
      </Text>
      <TextInput mode="outlined" label="Full name" />
      <TextInput mode="outlined" label="College email" keyboardType="email-address" autoCapitalize="none" />
      <TextInput mode="outlined" label="Semester" keyboardType="number-pad" />
      <SegmentedButtons
        value={department}
        onValueChange={setDepartment}
        buttons={[
          { value: 'CSE', label: 'CSE' },
          { value: 'ECE', label: 'ECE' },
          { value: 'ME', label: 'ME' },
        ]}
      />
      <TextInput mode="outlined" label="Password" secureTextEntry />
      <Button mode="contained" contentStyle={styles.button} onPress={() => navigation.navigate('OtpVerification', { email: 'student@toch.ac.in' })}>
        Verify college email
      </Button>
      <View />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontWeight: '900', letterSpacing: 0 },
  button: { height: 52 },
});
