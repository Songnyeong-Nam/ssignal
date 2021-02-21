import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        .catch((err) => alert(err))
    }

    //implement a listener run only on component mounting
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if (authUser) {
                navigation.replace('Home')
            }
        });

        //cleanup function
        return unsubscribe;
    }, []);

    return (
        <>
            <StatusBar style='light' />
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper} >
                <Image style={styles.image}
                    source={{
                        uri:
                            'http://drive.google.com/uc?export=view&id=1ZZn6KTvxZfe3ujBlS_KsldT1DdCxKKHQ'
                    }} />
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Email"
                        autoFocus
                        type="email"
                        value={email}
                        onChangeText={text => setEmail(text)} />
                    <Input
                        placeholder="Password"
                        secureTextEntry
                        type='password'
                        value={password}
                        onChangeText={text => setPassword(text)} 
                        onSubmitEditing={signIn}
                        />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Login" raised containerStyle={styles.button} onPress={signIn} />
                    <Button title="Register" raised containerStyle={styles.button} type='outline' onPress={() => { navigation.navigate('Register') }} />
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

export default LoginScreen;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
    },
    buttonContainer: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 150,
        color: '#F32059',
    }

})