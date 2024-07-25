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
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input:{
    flex: 1,
    height: 50,
    backgroundColor: '#262626',
    borderRadius: 5,
    paddingHorizontal: 15,
    color: '#FFF',
    marginRight: 10,
  },
  addButton:{
    width: 50,
    height: 50,
    backgroundColor: '#1E6F9F',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText:{
    color: '#FFF',
    fontSize: 24,
  },
  statusContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  status:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText:{
    color: '#4EA8DE',
    fontSize: 16,
    marginRight: 5,
  },
  statusCount:{
    color: '#FFF',
    fontSize: 16,
  },
  
})