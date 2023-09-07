import React from "react";
import { Image, ImageBackground, Text, View, StyleSheet, StatusBar, Pressable } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PFCColors } from "../../colors";
import backgroundImage from '../../assets/Frame1.png';

const OnBoardingImages = () => {
    const [value, setValue] = useState(0);
    const OnPress = () => setValue(value + 1);
    return (
        <SafeAreaView style={OnBoardingStyles.image}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={OnBoardingStyles.image}>
                <ImageBackground
                    source={backgroundImage}
                    resizeMode="cover"
                    style={OnBoardingStyles.image} >
                    <Text style={OnBoardingStyles.mainText}>Stronger every day, every way.</Text>
                    <Pressable style={OnBoardingStyles.Button} onPress={OnPress}>
                        <Text style={OnBoardingStyles.text}> Get Started</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

const OnBoardingStyles = StyleSheet.create({
    container: {
        //backgroundColor: '#C43B1E',
        //alignContent: "center",
        //justifyContent: 'center',
    },
    text: {
        color: "white",
        fontSize: 20,
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

export default OnBoardingImages;