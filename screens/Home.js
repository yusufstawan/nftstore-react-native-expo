import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NFTCard, HomeHeader, FocusedStatusBar, HomeBootom, AboutBootom } from "../components";
import { COLORS, NFTData, SIZES } from "../constants";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const navigation = useNavigation();

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

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
          <View
            style={{ height: 350, backgroundColor: COLORS.back }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 5,
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
  );
};

export default Home;
