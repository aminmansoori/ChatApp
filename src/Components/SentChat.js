import React from "react";
import { View, Text, StyleSheet } from "react-native";

//recieved props to manage the component due to its parents requierments
const SentChat = ({ txtChat, timeChat }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.containerView}>
        <Text style={styles.chatText}>{txtChat}</Text>
        <Text style={styles.timeText}>{timeChat}</Text>
      </View>
    </View>
  );
};

export default SentChat;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "flex-end",
    paddingBottom: 5,
    paddingHorizontal: 10
  },
  containerView: {
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 15,
    maxWidth: "80%",
    minWidth: "20%"
  },
  chatText: {
    color: "#000",
    padding: 5,
    paddingBottom: -5,
    fontSize: 16
  },
  timeText: {
    color: "#aaa",
    fontSize: 12,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: -5
  }
});
