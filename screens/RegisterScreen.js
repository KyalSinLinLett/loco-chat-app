import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import {StatusBar} from 'expo-status-bar'
import { auth } from '../firebase'

const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login",
        });
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            });
        }).catch((error) => alert(error.message));
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={{ marginBottom: 50 }}>
                Create an account
            </Text>

            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Full name"
                    autofocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <Input 
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                
                <Input 
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input 
                    placeholder="Profile Picture URL(optional)"
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button 
                containerStyle={styles.button}
                raised
                title="Register"
                onPress={register}
            />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        padding: 10
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10
    }    
})
