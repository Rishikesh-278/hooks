import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { PFCColors } from './colors';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  TouchableOpacity
} from 'react-native-gesture-handler';

export default function App() {

  const [value, setValue] = useState(0);
  const OnPress = () => setValue(value + 1);

  return (
    <GestureHandlerRootView>
      <NativeViewGestureHandler>
        <SafeAreaView style={styles.container}>
          <Text>Count : {value}</Text>
          <TouchableOpacity onPress={OnPress}>
            <Text> Press here</Text>
          </TouchableOpacity>
          <View>
            <Text>
              Button
            </Text>
          </View>
          <Button style={styles.Button} onPress={OnPress} title="Get Started" color={PFCColors.PRIMARY_500} />
          <Button
            onPress={OnPress}
            title="Learn More"
            color={PFCColors.PRIMARY_500}
            accessibilityLabel="Learn more about this purple button"
          />
        </SafeAreaView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView >

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    height: 50,
    width: 200,
    borderRadius: 20,
  },
});