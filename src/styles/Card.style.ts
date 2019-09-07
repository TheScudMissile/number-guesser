import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    /* iOS Only */
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    /* IOS ONLY */

    /* Android Only */
    elevation: 10,
    /* Android Only */

    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 100,
    maxWidth: '80%',
    padding: 15,
    width: 300
  }
});
