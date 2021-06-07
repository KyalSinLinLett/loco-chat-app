import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { auth } from '../firebase'
import color from 'color'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home")
            }
        });
        return unsubscribe;
    }, [])

    const signIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image 
                source={{
                    uri: "https://www.prospectmagazine.co.uk/content/uploads/2016/11/Pepedankmeems420blazeitohbabyatripledankaestheticafkeepit100.jpg",
                }}
                style={{ width: 180, height: 180, marginBottom: 25}}
            />

            <View style={styles.inputContainer}> 
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
            </View>

            <Button 
                onPress={signIn}
                title="Login"
                containerStyle={styles.button}
            />
            <Button 
                title="Register"
                containerStyle={styles.button}
                onPress={() => navigation.navigate('Register')}
                type="outline"
            />
            <View style={{height: 70}}></View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {
        width: 300
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
