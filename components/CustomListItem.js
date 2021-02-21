import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat}) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: 'http://drive.google.com/uc?export=view&id=1k49bch07eGfyhYEMs3YVe3u3fsOwNXf-'
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold' }}>
                    Ssignal Chat
                </ListItem.Title>
                <ListItem.Subtitle
                    numberOfLines={1}
                    ellipsizeMode='tail'>
                    This is a test subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default CustomListItem;