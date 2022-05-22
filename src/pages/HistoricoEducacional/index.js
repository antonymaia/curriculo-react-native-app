import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {Item} from './components/Item'

export const HistoricoEducacional = () => {
  const DATA = [
    {
      id: 1,
      instituicao: "IBRATEC",
      curso: "Tec. Análise e Desenvolvimento de Sistemas",
      grau: "Tecnico",
      dataInicio: "01/02/2018",
      dataConclusao: "20/11/2019",
    },
    {
      id: 2,
      instituicao: "Universidade Católica de Pernambuco",
      curso: "Sistemas para Internet",
      grau: "Tecnólogo",
      dataInicio: "01/02/2020",
      dataConclusao: "Em andamento",
    },
  ];

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.containerList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#10002B",
  },
  listContainer:{
    width: '100%'
  }
});
