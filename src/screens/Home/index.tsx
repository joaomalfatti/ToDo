import React from "react";

/* Vamos trazer os estilos do mobile*/
import { styles } from "./styles";
import { Text, View, Image, TextInput, TouchableOpacity} from "react-native";

import rocket from '../../assets/rocket.png';
import Clipboard from '../../assets/Clipboard.png';



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

      {/* View parte do status */}
      <View style={styles.statusContainer}>
        {/* View parte do criados */}
        <View style={styles.status}>
          <Text style={styles.statusText}>
            Criadas
          </Text>
          <Text style={styles.statusCount}>
            0
          </Text>
        </View>
        {/* View parte do Concluidos */}
        <View style={styles.status}>
          <Text style={styles.statusText}>
            Concluídas
          </Text>
          <Text style={styles.statusCount}>
            0
          </Text>
        </View>
      </View>

      {/* View parte das descrições de tarefas */}
      <View style={styles.emptyContainer}>
        <Image 
          style={styles.emptyImage}
          source={Clipboard}
        />
        <Text style={styles.emptyTitle}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptySubtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
      
    </View>
  );
}