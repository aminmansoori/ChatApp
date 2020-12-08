import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
//get dimentions of the main screen to have a responsive page
const wp = Dimensions.get("window").width;
const hp = Dimensions.get("window").height;

//recieved props to manage the component due to its parents requierments
const ReceivedChat = ({ txtChat, timeChat }) => {
  return (
    <View style={styles.mainView}>
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../Assets/Images/man.png')}
        resizeMode='contain'
      />
      <View style={styles.containerView}>

        <Text style={styles.chatText}> {txtChat} </Text>
        <Text style={styles.timeText}>
          {timeChat} </Text>
      </View>
    </View>
  );
}

export default ReceivedChat;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "flex-end",
    padding: wp * 0.02,
    flexDirection: 'row',
  },
  containerView: {
    backgroundColor: "#ccddff",
    padding: 0,
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

})