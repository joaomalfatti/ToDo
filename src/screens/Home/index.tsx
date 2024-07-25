import React from "react";

/* Vamos trazer os estilos do mobile*/
import { styles } from "./styles";
import { Text, View, Image, TextInput, TouchableOpacity} from "react-native";

import rocket from '../../assets/rocket.png';



export default function Home(){
  return(
    <View style={styles.oneContainer}>
      {/* Primeira view sobre foguete e o*/}
      <View style={styles.oneView}>
        {/* Aqui carrega a imagem do foguete */}
        <Image 
          style={styles.imageRocket}
          source={rocket}
        />
        {/*Esses dois texto seria da list. */}
        <Text style={styles.listTO}>
          To
        </Text>
        <Text style={styles.listDO}>
          Do
        </Text>





      </View>

      {/* View parte do input e o botão */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicone uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>
            +
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}