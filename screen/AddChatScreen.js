import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native'

const AddChatScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new Chat!",
            headerBackTitle: "Chats",
            headerBackTitleVisible: true,
        })
    },[navigation])

    return (
        <View>

        </View>
    );
};

export default AddChatScreen;

const styles = StyleSheet.create({

})