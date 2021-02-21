import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, View, KeyboardAvoidingView, Image } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'

import {db, auth} from '../firebase'


const RegisterScreen = ({ navigation }) => {
    const defaultImg = 'http://drive.google.com/uc?export=view&id=1k49bch07eGfyhYEMs3YVe3u3fsOwNXf-';

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imgUrl, setImgUrl] = useState('')


    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Login',
            headerBackTitleVisible : true
        });
    }, [navigation]);

    const register = () => {
        if (imgUrl === '') {
            setImgUrl(defaultImg)
        }
        //passes promise
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imgUrl
            });
        })
        .catch(err => alert(err.message))
    }
    return (
        <KeyboardAvoidingView behavior="height" style={styles.wrapper}>
            <StatusBar style="light" />
            <Text h4 style={{ textAlign: 'center', marginBottom: 20, color: '#F32059' }}> Create a Ssignal Account</Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Name"
                    autofocus
                    type='text'
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Input
                    placeholder="E-mail"
                    type='email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    type='password'
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Input
                    placeholder="Profile Image URL"
                    type='text'
                    value={imgUrl}
                    onChangeText={text => setImgUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button
                containerStyle={styles.button}
                raised
                onPress={register}
                title='Register'
            />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
    },
    inputContainer: {
        width: '93%',
        marginTop: 10,
    },
    button: {
        width: 200,
        marginTop: 10,
        color: '#F32059'
    }
})