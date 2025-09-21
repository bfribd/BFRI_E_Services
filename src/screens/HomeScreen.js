import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Linking,
} from "react-native";
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
          marginBottom: 10,
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
              fontSize: 14,
            }}
          >
            {item.name}
          </Text>
          <TouchableHighlight
            style={{
              color: "blue",
              fontWeight: "500",
              fontSize: 14,
            }}
            onPress={() => handleLinkPress(item.link)}
            underlayColor="#e1f7df"
          >
            <Text>Link</Text>
          </TouchableHighlight>
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
                style={{ marginBottom: 15, textAlign: "justify", fontSize: 13 }}
              >
                সঠিক জায়গায় সঠিক প্রজাতির চারা রোপণ বনায়নের অন্যতম পূর্বশর্ত।
                স্থান ও গাছের বৈশিষ্ট্য বিচারে বাংলাদেশের বিভিন্ন স্থানে রোপণ
                উপযোগী বনজ গাছের নাম নিম্নে দেওয়া হলো।
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
