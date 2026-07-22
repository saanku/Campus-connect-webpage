import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { palette } from './colors';

export const lightTheme = {
  ...MD3LightTheme,
  roundness: 8,
  colors: {
    ...MD3LightTheme.colors,
    primary: palette.brand,
    secondary: palette.coral,
    tertiary: palette.blue,
    background: palette.cloud,
    surface: palette.surface,
    surfaceVariant: '#EEF2F7',
    outline: palette.line,
    onSurface: palette.ink,
    onSurfaceVariant: palette.muted,
    error: palette.rose,
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  roundness: 8,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#2DD4BF',
    secondary: '#FDBA74',
    tertiary: '#93C5FD',
    background: palette.darkBg,
    surface: palette.darkSurface,
    surfaceVariant: '#1E293B',
    outline: palette.darkLine,
    onSurface: '#F8FAFC',
    onSurfaceVariant: '#CBD5E1',
    error: '#FDA4AF',
  },
};

export type AppTheme = typeof lightTheme;
