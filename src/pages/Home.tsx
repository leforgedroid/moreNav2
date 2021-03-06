import React from 'react';
import {
  useRoute,
  RouteProp,
  useNavigation,
  StackActions,
} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {View, Text, StyleSheet, Button} from 'react-native';
import * as RootNavigation from '../../RootNavigation';
declare var global: {HermesInternal: null | {}};

export const Home = () => {
  const navigator = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => {
          return navigator.dispatch(StackActions.push('Login'));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
