import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';

import { auth } from '../firebase';

import { FocusedStatusBar } from "../components";
import { assets } from '../constants';
import { COLORS } from "../constants";

const About = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar backgroundColor={COLORS.primary} />
        <View style={{ flex: 1 }}>
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <View style={{ height: 350, backgroundColor: COLORS.primary }} />
          </View>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
          <Image
            source={assets.profile}
            resizeMode="contain"
            style={{ width: 120, height: 120, alignSelf: "center", marginBottom: 20, marginTop: 20 }}
          />
          <Text style={styles.buttonText}>Hallo 👏</Text>
          <Text style={styles.buttonText}>{auth.currentUser?.email}</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default About;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#0782F9',
    width: '25%',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    alignSelf: 'center',
  },
})
