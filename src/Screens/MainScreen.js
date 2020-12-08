import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import ReceivedChat from '../Components/ReceivedChat';
import SentChat from '../Components/SentChat';
import MessageInput from '../Components/MessageInput';

const MainScreen = () => {

    let listViewRef; //to manage flatlist scrolling

    //the json array to show some default messages
    const [messages, setMessage] = useState(
        [
            { id: "a", user_id: 2, txtChat: "Hey!", timeChat: "7:15" },
            { id: "b", user_id: 1, txtChat: "Hi, How are you?", timeChat: "7:16" },
            { id: "c", user_id: 2, txtChat: "Good. i am just reading this \n tutorial on a really cool chat SDK.\n Have you ever heard of\n CometChat?", timeChat: "7:17" },
        ]
    )

    //appending a new message object to the current array
    const sendmessage = (userMessage) => {
        var t = new Date();
        var m = t.getMinutes();
        var h = t.getHours();
        var time = h + ":" + m;
        var new_obj = { id: "r", user_id: 1, txtChat: userMessage, timeChat: time };
        setMessage([...messages, new_obj]);
    }

    //managing flatlist scrolling
    const downButtonHandler = () => {
        listViewRef.scrollToEnd({ animated: true });
    };

    return (
        <>
            <View style={{ flex: 1 }} >
                <FlatList
                    ref={(ref) => {
                        listViewRef = ref;
                    }}
                    //when the content of the flatlist is changed the function will be fired
                    onContentSizeChange={() => {
                        downButtonHandler()
                    }}
                    data={messages}
                    renderItem={({ item }) => {
                        if (item.user_id == 1) {
                            return (<SentChat txtChat={item.txtChat} timeChat={item.timeChat} avatar={item.avatar} />)
                        }
                        else {
                            return (<ReceivedChat txtChat={item.txtChat} timeChat={item.timeChat} />)
                        }
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            {
                //recieving the new message from the child component in order to be saved in the current array
                <MessageInput sendMessage={(message) => {
                    sendmessage(message.trim())
                }} />
            }
        </>
    )
}

export default MainScreen;