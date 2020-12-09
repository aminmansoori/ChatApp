import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";

const MessageInput = ({ sendMessage }) => {
  //components variables that should be changed by state changes
  const [value, OnchangeText] = useState("");
  const [active, setActive] = useState(false);

  //the icon to make active/deactive send button owing to text message size
  let icon = active
    ? require("../Assets/Images/send-enable.png")
    : require("../Assets/Images/send-disable.png");

  return (
    <View style={styles.mainView}>
      <View style={styles.containerView}>
        <TextInput
          style={styles.inputText}
          placeholder="Message"
          value={value}
          multiline={true}
          textAlignVertical="top"
          onChangeText={(txt) => {
            OnchangeText(txt);
            if (txt.length > 0) {
              setActive(true);
            } else {
              setActive(false);
            }
          }}
        />
        <TouchableOpacity
          style={styles.buttomStle}
          //make the send button active/deactive
          disabled={!active}
          onPress={() => {
            //send the typed message for the parent screen, called MainScreen
            sendMessage(value);
            // freed the input box after sending the message
            OnchangeText("");
            /* deactive the send button after sending the massage */
            setActive(false);
          }}
        >
          <Image style={styles.imageStyle} source={icon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    marginBottom: 5
  },
  containerView: {
    width: "96%",
    backgroundColor: "#fff",
    flexDirection: "row",
    maxHeight: hp * 0.2,
    borderRadius: 35
  },
  inputText: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    paddingVertical: 10
  },
  buttomStle: {
    justifyContent: "center",
    paddingHorizontal: 5
  },
  imageStyle: {
    width: wp * 0.07,
    height: hp * 0.04
  }
});
