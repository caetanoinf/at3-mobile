import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks";
import HomeTabs from "./HomeTabs";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function Navigation() {
  const { authenticatedUser } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authenticatedUser ? (
          <>
            <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ titlte: "Entrar" }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Registrar-se" }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
