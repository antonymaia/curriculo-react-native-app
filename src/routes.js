import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { HistoricoEducacional } from "./pages/HistoricoEducacional"
import { ExperienciaProfissional } from "./pages/Experiencia-profissional";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const Routes = (props) => { 
  const [curriculo , setCurriculo]= useState({})

  useEffect(()=>{
    setCurriculo(props.curriculo)
  }, [])

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
        name="DadosPessoas"
        component={Home}
        initialParams={{curriculo: curriculo}}
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
          tabBarLabel: "Dados Pessoais",
          tabBarIcon: ({ size, color }) => {
            <Entypo name="ios-person-circle" size={20} color={'white'} />
          },
        }}
      />
      <Tab.Screen
        name="HistoricoEducacional"
        component={HistoricoEducacional}
        options={{
          headerTitleAlign: "center",
          title: "Historico Educacional",
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
          tabBarIcon: () => {
            <Entypo name="book-education" size={20} color={'white'} />;
          },
        }}
      />
      <Tab.Screen
        name="ExpProfissional"
        component={ExperienciaProfissional}
        initialParams={{id: 10}}
        options={{
          headerTitleAlign: "center",
          title: "Experiência Profissional",
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
          tabBarIcon: () => {
            <Entypo name="torso-business" size={20} color={'white'} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
