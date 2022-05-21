import * as React from "react";
import { useState , useEffect} from "react";
import { StyleSheet, SafeAreaView, View, Text} from "react-native";
import { Avatar } from "@rneui/themed";

export const Home = () => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.containerAvatar}>
        <Avatar
          size={200}
          rounded
          source={require('../../../assets/foto-perfil.jpg')}
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
