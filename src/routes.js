import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home } from "./pages/Home";
import { HistoricoEducacional } from "./pages/HistoricoEducacional"
import { ExperienciaProfissional } from "./pages/Experiencia-profissional";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: "#240046",
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
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
            borderBottomColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => {
            <Entypo name="Home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="HistoricoEducacional" component={HistoricoEducacional}/>
      <Tab.Screen
        name="ExpProfissional"
        component={ExperienciaProfissional}
        options={{
          headerTitleAlign: "center",
          title: "Experiência Profissional",
        }}
      />
    </Tab.Navigator>
  );
};
