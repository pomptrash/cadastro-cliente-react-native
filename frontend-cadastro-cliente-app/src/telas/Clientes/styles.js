import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#033",
    padding: 20,
  },
  scrollContent:{
    paddingTop: 30,
    paddingBottom: 50,
    justifyContent:'space-around',
    minHeight:'100%',
    gap: 20
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    padding: 15,
    marginBottom:  0,
    borderBottomWidth:3,
    borderBottomColor:'#fff'
  },
  main:{
    flex:1,
    gap: 10,
  },
  card: {
    backgroundColor: "#033",
    alignItems: "flex-start",
    padding: 5,
    gap:5,
    marginHorizontal: 15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

  },
  itemUser:{
    flexDirection:'row',
    alignItems:'center',
    gap:15
  },
  itemNome: {
    color: "#fff",
    fontSize: 26,
    fontWeight: 'bold',
    justifyContent:'flex-start'
  },
  item:{
    color:'#fff',
    fontSize: 18
  }
});
