import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingTop: 60,
    height: 120,
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
