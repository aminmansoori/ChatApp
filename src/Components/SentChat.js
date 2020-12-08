import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
//get dimentions of the main screen to have a responsive page
const wp = Dimensions.get("window").width;
const hp = Dimensions.get("window").height;
const window = Dimensions.get("window");
console.log('window : ', window);

//recieved props to manage the component due to its parents requierments
const SentChat = ({ txtChat, timeChat }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.containerView}>
                <Text style={styles.chatText}> {txtChat} </Text>
                <Text style={styles.timeText}>
                    {timeChat} </Text>
            </View>
        </View>
    );
}

export default SentChat;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "flex-end",
        padding: wp * 0.02
    },
    containerView: {
        backgroundColor: "#fff",
        padding: 0,
        justifyContent: "center",
        borderRadius: 15,
        maxWidth: wp * 0.8,
        minWidth: wp * 0.2
    },
    chatText: {
        color: "#000",
        padding: wp * 0.01,
        paddingBottom: hp * 0.002,
        fontSize: 16
    },
    timeText: {
        color: "#aaa",
        fontSize: hp * 0.015,
        paddingLeft: wp * 0.02,
        paddingBottom: hp * 0.002
    }

})