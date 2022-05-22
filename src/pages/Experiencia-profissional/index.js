import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Item } from "./components/Item";

export const ExperienciaProfissional = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://curriculo-spring-api.herokuapp.com/curriculo")
      .then((response) => response.json())
      .then((json) => {
        setData(json[0].ExpProfissional);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={styles.container}>
      {loading && <Text style={styles.loadingText}>Loading..</Text>}
      {data && (
        <FlatList
          style={styles.containerList}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
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
  loadingText:{
    padding: 20,
    fontSize: 20,
    color: "white",
  },
  containerList:{
    width: '100%',
  }
});
