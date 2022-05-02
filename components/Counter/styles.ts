import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text__container: {
    height: 30,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    width: 100,
    margin: 10,
  },
  button_red: {
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    width: 100,
    margin: 10,
  },
  button__text: {
    fontSize: 12,
    color: 'white',
  },
});

export default styles;
