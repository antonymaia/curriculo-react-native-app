import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Item = (item) => {
  return <View style={styles.container}>
    <Text style={styles.textoDados}>{`Instituição: ${item.item.instituicao}`}</Text>
    <Text style={styles.textoDados}>{`Curso: ${item.item.curso}`}</Text>
    <Text style={styles.textoDados}>{`Grau: ${item.item.grau}`}</Text>
    <Text style={styles.textoDados}>{`Instituição: ${item.item.instituicao}`}</Text>
    <Text style={styles.textoDados}>{`Data de início: ${item.item.dataInicio}`}</Text>
    <Text style={styles.textoDados}>{`Data de conclusão: ${item.item.dataConclusao}`}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#240046",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  textoDados: {
    color: "white",
    fontSize: 20,
    paddingVertical: 5,
  },
});
