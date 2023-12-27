/* @flow */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/reducers/counterSlice';
import { incrementAsync } from '../redux/actions/counterAction';
import { Country } from '../models/country';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const country: Country = { region: '', subregion: ''};

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Count: {counter}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Increment Async" onPress={() => dispatch(incrementAsync())} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
