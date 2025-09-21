import { Text, StyleSheet, View, Dimensions } from "react-native";

const DescriptionText = ({ text }) => {
  const width = Dimensions.get("window").width;

  return (
    <View style={{ flexDirection: "row", gap: 2 }}>
      <Text style={styles.descriptionText}>&#8226;</Text>
      <Text style={{ ...styles.descriptionText, width: width - 44 }}>
        {text}
      </Text>
    </View>
  );
};

export default DescriptionText;

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 16,
    lineHeight: 25,
    textAlign: "justify",
    marginBottom: 10,
  },
});
