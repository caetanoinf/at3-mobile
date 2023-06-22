import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ProductsScreen from "../screens/ProductsScreen";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Cadastro"
        component={HomeScreen}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }}
      />
      <Tab.Screen
        name="Produtos"
        component={ProductsScreen}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="cart" size={24} color={color} /> }}
      />
      <Tab.Screen
        name="Sobre"
        component={AboutScreen}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} /> }}
      />
    </Tab.Navigator>
  );
}
