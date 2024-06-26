import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width:104,
    height: 120,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 8,
    marginRight: 6
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 21
  },
  check: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 2,
  },
  checked: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 2
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    color: theme.colors.heading,
    marginTop: 16
  }
});
