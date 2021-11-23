import React from 'react';
import {StyleSheet,
        Dimensions,
        View,
        Text,
        Image,
        ScrollView,
        TextInput,
        Button
      } from 'react-native';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import {firebaseConfig} from './firebase_config';

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig) }
var database = firebase.database();
var auth = firebase.auth();
var user = auth.currentUser
const { height } = Dimensions.get('window');

export default function App() {
  return (
    <ScrollView>
      <View style={styles.form}>
        <Image
          source={
            require('./images/logo_wumh.png')
          }
          style={{ width: 200, height: 200 }}
        /><br/>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          placeholder="Username"
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          placeholder="Password"
        /><br/>
        <Button title="Connection" color="purple"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: height * 0.20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
