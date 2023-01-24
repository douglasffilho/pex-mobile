import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Home from "./pages/Home";
import PlusJakartaDisplay from "./assets/fonts/PlusJakartaDisplay.ttf";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ PlusJakartaDisplay });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerMode: "none",
        })}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
