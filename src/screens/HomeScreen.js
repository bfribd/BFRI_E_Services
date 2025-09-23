import { View, Text, FlatList, Linking, TouchableOpacity } from "react-native";
import Svg, { Polyline, Path } from "react-native-svg";
import ScreenWrapper from "../components/ScreenWrapper";
import { apps } from "../utils/libs";

const HomeScreen = () => {
  const handleLinkPress = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {}
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={{
          backgroundColor: "#e5ebe4",
          borderRadius: 5,
          width: "100%",
          padding: 18,
          marginBottom: 22,
          paddingHorizontal: 20,
        }}
        onPress={() => handleLinkPress(item.link)}
      >
        <Text
          style={{
            color: "green",
            fontWeight: "500",
            fontSize: 18,
            textDecorationLine: "none",
          }}
        >
          {item.id}. {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper hasNoHeader={true} statusBarTheme="dark">
      <View style={{ padding: 16 }}>
        <FlatList
          ListHeaderComponent={
            <View>
              <Text
                style={{
                  width: "100%",
                  marginBottom: 25,
                  textAlign: "center",
                  fontWeight: "800",
                  fontSize: 22,
                  color: "green",
                  lineHeight: 35,
                }}
              >
                বাংলাদেশ বন গবেষণা ইনস্টিটিউট এর মোবাইল অ্যাপস সমূহ
              </Text>
            </View>
          }
          data={apps}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
