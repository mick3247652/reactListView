import React from "react";
import {capitalizeWord} from "../utils/capitalizeWord";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      flexDirection: "row",
      marginTop: 5,
      marginBottom: 5,
      alignItems: "center"
    },
    text: {
      marginLeft: 12,
      fontSize: 18
    },
    photo: {
      height: 60,
      width: 60,
      borderRadius: 30
    },
  });

const Row = (props) => (
    <View style={styles.container}>
      <Image source={{ uri: props.picture.large}} style={styles.photo} />
      <Text style={styles.text}>
      {capitalizeWord(`${props.name.first} ${props.name.last}`)}
      </Text>
    </View>
  );

  export default Row