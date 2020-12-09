import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

//recieved props to manage the component due to its parents requierments
const ReceivedChat = ({ txtChat, timeChat }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <Image
          style={{ width: 35, height: 35 }}
          source={require("../Assets/Images/man.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerView}>
        <Text style={styles.chatText}> {txtChat} </Text>
        <Text style={styles.timeText}>{timeChat} </Text>
      </View>
    </View>
  );
};

export default ReceivedChat;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    paddingBottom: 5
  },
  imageView: {
    padding: 5
  },
  containerView: {
    backgroundColor: "#ccddff",
    justifyContent: "center",
    borderRadius: 15,
    maxWidth: "80%",
    minWidth: "20%"
  },
  chatText: {
    fontSize: 16,
    color: "#000",
    padding: 5,
    paddingBottom: -5
  },
  timeText: {
    color: "#aaa",
    fontSize: 12,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: -5
  }
});
