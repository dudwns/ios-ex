import { Text, SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./Homep";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LottoGenerator from "./LottoGenerator";
import ClockDigital from "./ClockDigital";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LottoGenerator" component={LottoGenerator} />
        <Stack.Screen name="ClockDigital" component={ClockDigital} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
