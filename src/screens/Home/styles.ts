import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container:{
    flex: 0.2,
    backgroundColor: '#0D0D0D',
    padding: 24,
    flexDirection: 'row', // Adicione esta linha
    alignItems: 'center', // Alinhar itens no eixo transversal
    justifyContent: 'center' // Centralizar itens no eixo principal
  },
  listTO:{
    fontSize: 34,
    color: '#4EA8DE',
    fontWeight: 'bold', // Espaçamento entre TO e DO
  },
  listDO:{
    fontSize: 34,
    color: '#5E60CE',
    fontWeight: 'bold',
  },
})