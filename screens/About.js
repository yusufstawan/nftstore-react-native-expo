import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, FlatList } from 'react-native';

import { auth } from '../firebase';

import { FocusedStatusBar } from "../components";
import { assets, COLORS, SIZES, NFTData } from '../constants';
import { AboutBootom, HomeBootom, CircleButton } from "../components";
import { NFTCard } from "../components";

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
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}
          marginTop={15}
        />
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
            <View style={{ height: 350, backgroundColor: COLORS.back }} />
          </View>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
          >
            <Text style={styles.signOut}>Sign out</Text>
          </TouchableOpacity>
          <Image
            source={assets.profile}
            resizeMode="contain"
            style={{ width: 120, height: 120, alignSelf: "center", marginBottom: 20, marginTop: 20 }}
          />
          <Text style={styles.buttonText}>Hallo 👏</Text>
          <Text style={styles.buttonText}>{auth.currentUser?.email}</Text>
          <TouchableOpacity
            style={styles.buttonUpload}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Upload NFT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerMain}>
          <Text style={styles.main}>Your NFT art:</Text>

          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 5
          }}
        >
          <HomeBootom
            minWidth={90}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Home")}
          />
          <AboutBootom
            minWidth={90}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("About")}
          />
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
    marginTop: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
    alignSelf: 'center',
  },
  buttonUpload: {
    alignSelf: 'center',
    backgroundColor: '#001F2D',
    width: '30%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  containerMain: {
    flex: 1,
    marginTop: -50,
  },
  main: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginLeft: 20,
    marginTop: 30,
  },
  signOut: {
    color: "white",
    fontWeight: '700',
    fontSize: 16,
    alignSelf: 'center',
  }
})
