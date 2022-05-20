import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/themed";
import axios from "axios";

export const Home = () => {
  const [curriculo, setCurriculo] = useState({});

  useEffect(() => {
    axios
      .get("https://git.heroku.com/curriculo-spring-api.git/curriculo/", )
      .then((response) => setCurriculo(response.data[0]))
      .catch((err) => console.log("Erro na requisição: ", err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerAvatar}>
        <Avatar
          size={200}
          rounded
          title="AM"
          containerStyle={{ backgroundColor: "#3d4db7" }}
        />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{curriculo?.nome}</Text>
        <Text style={styles.subtitle}>{curriculo.posicaoPretendida}</Text>
      </View>
      <View style={styles.containerDados}>
        <View>
          <Text style={styles.tituloDados}>Dados Pessoais</Text>
        </View>
        <Text style={styles.textDados}>
          {"Telefone: " + curriculo.telefone}
        </Text>
        <Text style={styles.textDados}>
          {"Email: " + curriculo.email}
        </Text>
        <Text style={styles.textDados}>
          {"Linkedin: " + curriculo.linkLinkedin}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#10002B",

  },
  containerAvatar: {
    padding: 30,
  },
  containerTitle: {
    alignItems: "center",
  },
  title: {
    padding: 10,
    fontSize: 30,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
  containerDados: {
    width: "90%",
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#240046",
  },
  tituloDados: {
    paddingVertical: 15,
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  textDados: { color: "white", fontSize: 20, paddingVertical: 5 },
});
