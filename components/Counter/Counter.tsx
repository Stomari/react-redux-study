import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

// Redux
import {decrement, increment, incrementAsync} from '../../redux/counter';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';

// Styles
import styles from './styles';

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const isLoading = useAppSelector(state => state.counter.loading);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <View style={styles.text__container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.text}>{count}</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(increment())}>
        <Text style={styles.button__text}>Add 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button_red}
        onPress={() => dispatch(decrement())}>
        <Text style={styles.button__text}>Remove 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(incrementAsync())}>
        <Text style={styles.button__text}>Add 1 Async</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
