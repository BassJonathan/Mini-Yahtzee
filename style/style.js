import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  scrollV: {
    height: "100%",
  },
  header: {
    backgroundColor: 'skyblue',
    marginTop: 10,
    flexDirection: 'row'
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  gamevalue: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  flex: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "skyblue",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#1A1A1A",
    fontSize: 20
  },
  numbers: {
    flexDirection: 'column',
  },
  nbrSum: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18
  },
  dropShadow: {
    marginVertical: 10,
    paddingHorizontal: 18,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  }
});