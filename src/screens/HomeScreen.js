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
      <View
        key={item.id}
        style={{
          backgroundColor: "#e5ebe4",
          borderRadius: 5,
          width: "100%",
          padding: 8,
          marginBottom: 13,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "green",
              fontWeight: "500",
              fontSize: 17,
            }}
          >
            {item.id}. {item.name}
          </Text>
          <TouchableOpacity
            onPress={() => handleLinkPress(item.link)}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "blue",
                fontWeight: "500",
                fontSize: 17,
                textDecorationLine: "none",
              }}
            >
              Link{" "}
            </Text>
            <Svg width={16} height={16} viewBox="0 0 16 16">
              <Polyline
                points="8.25 2.75,2.75 2.75,2.75 13.25,13.25 13.25,13.25 7.75"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <Path
                d="m13.25 2.75-5.5 5.5m3-6.5h3.5v3.5"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScreenWrapper hasNoHeader={true}>
      <View style={{ padding: 16 }}>
        <FlatList
          ListHeaderComponent={
            <View>
              <Text
                style={{
                  width: "100%",
                  marginBottom: 16,
                  textAlign: "center",
                  fontWeight: "800",
                  fontSize: 22,
                  color: "green",
                }}
              >
                বি.এফ.আর.আই-এর ই-সেবা
              </Text>
              <Text
                style={{
                  width: "100%",
                  marginBottom: 20,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                বি.এফ.আর.আই এর সকল অ্যাপসমূহের তালিকা এবং তাদের প্লে ষ্টোরের
                লিঙ্ক দেয়া হল
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
