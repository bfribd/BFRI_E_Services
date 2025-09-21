import { SystemBars } from "react-native-edge-to-edge";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenWrapper = ({ children, style, hasNoHeader, statusBarTheme }) => {
  const edges = ["left", "right", "bottom"];

  if (hasNoHeader) {
    edges.push("top");
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f7fcf9",
        ...style,
      }}
      edges={edges}
    >
      <SystemBars style={statusBarTheme || "light"} />
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
