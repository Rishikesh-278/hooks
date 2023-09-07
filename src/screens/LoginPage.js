import React from "react";
import {
    Button,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const LoginPage = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.HiText}> 👋 Hi!</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    HiText: {
        color: "black",
        fontWeight: "800",
        fontSize: 34,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    mainText: {
        padding: 30,
        color: "white",
        fontSize: 34,
        fontWeight: '800',
    },
    Button: {
        margin: 30,
        height: 50,
        width: 350,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: PFCColors.PRIMARY_500,
    },
});