import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Logo from '../assets/chat.png';

const BGColor = "#FFF3B8"

export default function SplashScreen() {
  const edges = useSafeAreaInsets();
  const startAnimation = useRef(new Animated.Value(0)).current;

  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;

  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

  useEffect(() => {

    setTimeout(() => {
      Animated.parallel([
        Animated.timing(
          startAnimation,
          {
            toValue: -Dimensions.get('window').height + (edges.top + 65),
            useNativeDriver: true
          }
        ),
        Animated.timing(
          scaleLogo,
          {
            toValue: 0.3,
            useNativeDriver: true
          }
        ),
        Animated.timing(
          scaleTitle,
          {
            toValue: 0.8,
            useNativeDriver: true
          }
        ),
        Animated.timing(
          moveLogo,
          {
            toValue: {
              x: (Dimensions.get("window").width / 2) - 35,
              y: (Dimensions.get('window').height / 2) - 5
            },
            useNativeDriver: true
          }
        ),
        Animated.timing(
          moveTitle,
          {
            toValue: {
              x: 0,
              y: (Dimensions.get('window').height / 2) - 90
            },
            useNativeDriver: true
          }
        ),
        Animated.timing(
          contentTransition,
          {
            toValue: 0,
            useNativeDriver: true
          }
        )
      ])
        .start();

    }, 1000);

  }, [])

  return (

    <View style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }}>
      <Animated.View style={{
        flex: 1,
        backgroundColor: BGColor,
        zIndex: 0,
        transform: [
          { translateY: startAnimation }
        ]
      }}>

        <Animated.View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Animated.Image source={Logo} style={{
            width: 100,
            height: 100,
            marginBottom: 20,
            transform: [
              { translateX: moveLogo.x },
              { translateY: moveLogo.y },
              { scale: scaleLogo },

            ]
          }}></Animated.Image>

          <Animated.Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            transform: [
              { translateY: moveTitle.y },
              { scale: scaleTitle }
            ]
          }}>NFT Store</Animated.Text>

        </Animated.View>

      </Animated.View>

      <Animated.View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.04)',
        zIndex: 0,
        transform: [
          { translateY: contentTransition }
        ]
      }}>
      </Animated.View>
    </View>
  );
}
