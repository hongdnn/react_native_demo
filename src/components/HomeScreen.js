/* @flow */

import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/reducers/counterSlice';
import { incrementAsync } from '../redux/actions/counterAction';
import { getCountry } from '../services/api';
import { secureStorage } from '../api_client/secure_storage';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  const { countries, loading } = useSelector(state => state.country);

  useEffect(() => {
    secureStorage.saveToken('JWTToken');
  }, []);


  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Count: {counter}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Increment Async"
        onPress={() => dispatch(incrementAsync())}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Search country" onPress={() => dispatch(getCountry('united'))} />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (null)
      }

      {
        countries.map((country) => (
          <View key={country.name.common}>
            <Text>Country: {country.name.common}</Text>
            <Text>Region: {country.region}</Text>
            <Text>Subregion: {country.subregion}</Text>
          </View>
        ))
      }
    </View>
  );
};

export default HomeScreen;
