import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { SystemBars } from "react-native-edge-to-edge";

const WelsomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./../../assets/images/forest_cover.jpg")}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
      children={
        <SafeAreaView
          style={{
            flex: 1,
            paddingHorizontal: 16,
          }}
        >
          <SystemBars style="light" />
          <View style={styles.logoContainer}>
            <Image
              source={require("./../../assets/images/bd_govt_logo.png")}
              style={{ width: 70, height: 70, marginRight: 20 }}
            />
            <Image
              source={require("./../../assets/images/bfri_logo.png")}
              style={{ width: 70, height: 70 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.appTitle}>কোথায় কি গাছ লাগাবেন</Text>
            <Text style={styles.presentedByHeader}>Presented By</Text>
            <Text style={styles.presentedByText}>
              Bangladesh Forest Research Institute (BFRI)
            </Text>
            <Text style={styles.presentedByText}>
              Email: director_bfri@ctpath.net
            </Text>
            <Text style={styles.presentedByText}>www.bfri.gov.bd</Text>
          </View>
          <View style={styles.openButtonContainer}>
            <Button
              style={{ ...styles.openButton, width: 180 }}
              textColor="white"
              contentStyle={{ paddingHorizontal: 10, paddingVertical: 4 }}
              mode="contained"
              onPress={() => navigation.navigate("HomeScreen")}
            >
              Start
            </Button>
            <Button
              style={{
                ...styles.openButton,
                backgroundColor: "#377d3f",
                width: 180,
                marginTop: 30,
              }}
              contentStyle={{ paddingHorizontal: 10, paddingVertical: 4 }}
              textColor="white"
              mode="contained"
              onPress={() => navigation.navigate("AboutUsScreen")}
            >
              About Us
            </Button>
          </View>
        </SafeAreaView>
      }
    />
  );
};

export default WelsomeScreen;

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  appTitle: {
    textAlign: "center",
    fontSize: 25,
    lineHeight: 33,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 3 },
    textShadowRadius: 10,
    marginTop: 60,
  },

  presentedByHeader: {
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    color: "#70e678",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 10,
    marginTop: 50,
  },

  presentedByText: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 20,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 3 },
    textShadowRadius: 10,
    marginTop: 10,
  },

  openButtonContainer: {
    possition: "absulate",
    alignItems: "center",
    justifyContent: "center",
    bottom: "7%",
    left: 0,
    right: 0,
  },

  openButton: {
    marginTop: 40,
    borderRadius: 100 / 2,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#237523",
  },
});
