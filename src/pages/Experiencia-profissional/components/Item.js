import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Item = (item) => {
  const curriculo = item.item;

  const dataAdmissao = `${curriculo.dataAdmissao[2]}/${curriculo.dataAdmissao[1]}/${curriculo.dataAdmissao[0]}`;
  const dataDemissao = `${curriculo.dataDemissao[2]}/${curriculo.dataDemissao[1]}/${curriculo.dataDemissao[0]}`;
  return (
    <View style={styles.container}>
      <Text style={styles.textoDados}>
        {"Empresa: " + curriculo.nomeEmpresa}
      </Text>
      <Text style={styles.textoDados}>{"Função: " + curriculo.funcao}</Text>
      <Text style={styles.textoDados}>{"Data admissão: " + dataAdmissao}</Text>
      <Text style={styles.textoDados}>{"Data Demissão: " + dataDemissao}</Text>
    </View>
  );
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
