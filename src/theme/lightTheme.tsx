import { ExtendedTheme, Theme } from '@react-navigation/native';
import '@react-navigation/native';

export const lightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    primary: '#AE6DEB',
    onPrimary: '#eceff1',
    secondary: '#FFAD00',
    background: '#e1e2e1',
    card: '#f5f5f6',
    text: '#3B3833',
    border: '#babdbe',
    notification: 'rgb(255, 69, 58)',
  },
};
declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      onPrimary: string;
      secondary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
