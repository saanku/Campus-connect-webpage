import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { ShieldCheck } from 'lucide-react-native';
import { Screen } from '../../components/Screen';
import { currentStudent } from '../../data/mockData';
import { AuthStackParamList } from '../../navigation/types';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/slices/authSlice';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState(currentStudent.email);
  const [password, setPassword] = useState('campus@123');

  return (
    <Screen>
      <View style={styles.hero}>
        <View style={[styles.logo, { backgroundColor: theme.colors.primary }]}>
          <ShieldCheck size={34} color="#FFFFFF" />
        </View>
        <Text variant="displaySmall" style={styles.title}>
          TOCH Connect
        </Text>
        <Text style={[styles.copy, { color: theme.colors.onSurfaceVariant }]}>
          Your verified campus identity, communities, notes, events, chat, and marketplace in one Android app.
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput mode="outlined" label="College email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <TextInput mode="outlined" label="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Button mode="contained" contentStyle={styles.button} onPress={() => dispatch(login({ user: currentStudent, token: 'demo-token' }))}>
          Login
        </Button>
        <Button mode="text" onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot password
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('Signup')}>
          Create student account
        </Button>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { paddingTop: 44, gap: 14 },
  logo: { width: 64, height: 64, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  title: { fontWeight: '900', letterSpacing: 0 },
  copy: { fontSize: 16, lineHeight: 24 },
  form: { gap: 14 },
  button: { height: 52 },
});
