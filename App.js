import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  const [curriculo, setCurriculo] = useState({});

  useEffect(()=>{
    fetch('https://curriculo-spring-api.herokuapp.com/curriculo')
      .then((response) => response.json())
      .then((json) => setCurriculo(json[0]))
      .catch((error) => {
        console.error(error);
      });
  },[])



  return (
    <NavigationContainer>
      <Routes curriculo={curriculo}/>
    </NavigationContainer>
  );
}
