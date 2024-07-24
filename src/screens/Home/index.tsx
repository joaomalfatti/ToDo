import React from "react";

/* Vamos trazer os estilos do mobile*/
import { styles } from "./styles";
import { Text, View} from "react-native";




export default function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.listTO}>
        To
      </Text>
      <Text style={styles.listDO}>
        Do
      </Text>
    </View>
  );
}