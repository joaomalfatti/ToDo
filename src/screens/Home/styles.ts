import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  oneContainer:{
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  oneView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
  imageRocket:{
    marginRight: 12
  },
})