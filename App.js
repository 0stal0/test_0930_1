import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  // 음성 녹음 버튼 클릭 시 호출될 함수
  const handlePress = () => {
    console.log("Recording started...");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.recordButton} onPress={handlePress}>
        <Icon name="microphone" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff", // 배경색
  },
  recordButton: {
    backgroundColor: "#b0e0e6", // 파스텔 블루
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // 안드로이드 그림자 효과
  },
});
