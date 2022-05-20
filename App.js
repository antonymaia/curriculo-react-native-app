import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { Home } from "./src/pages/Home";
import { ExperienciaProfissional } from "./src/pages/experiencia-profissional";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Meu Currículo">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: "center",
            title: "Meu Currículo",
            headerTitleStyle: {
              color: "white",
              fontSize: 20,
              fontWeight: "600",
            },
            headerStyle: {
              backgroundColor: "#240046",
            },
            tabBarLabel: '',
            tabBarIcon: () => {
              <Icon name="person" color="#240046" size={30}/>
            }
          }}
        />
        <Tab.Screen
          name="ExpProfissional"
          component={ExperienciaProfissional}
          options={{
            headerTitleAlign: "center",
            title: "Experiência Profissional",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
