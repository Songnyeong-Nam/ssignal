import React, { useLayoutEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomListItem from '../components/CustomListItem';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'

import { db, auth } from '../firebase'

const HomeScreen = ({ navigation }) => {

    const signOutUser = () => {
        auth.signOut()
            .then(() => { navigation.replace('Login') })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={signOutUser}>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={.5}>
                        <AntDesign name='camerao' size={24} color='#F32059' />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {navigation.navigate('AddChat')}}>
                        <SimpleLineIcons name='pencil' size={24} color='#F32059' />
                    </TouchableOpacity>
                </View>
            )
        })
    }, []);

    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <CustomListItem />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 80,
        marginRight: 10,
    },
})