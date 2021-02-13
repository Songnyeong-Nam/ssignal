import React from 'react';
import { StyleSheet, View, Text} from 'react-native'
import {Button, Input, Image} from 'react-native-elements'
import {StatusBar} from 'expo-status-bar'

const LoginScreen = () => {
    return (
        <View>
            <StatusBar style='light'/>
            <Image style={styles.image}
                source={{
                    uri:
                    'https://www.citypng.com/public/uploads/preview/-51610296406aaechcrrpc.png'
                }}/>
                <View style={styles.inputContainer}>
                    <Input placeholder="Email" autoFocus type="email"/>
                    <Input placeholder="Password" secureTextEntry type='password'/>
                </View>
            <Text>Login</Text>
        </View>
    );
};

export default LoginScreen;
const styles = StyleSheet.create({
    image: {
        width:'200',
        height:'200'
    },
    inputContainer:{

    }

})