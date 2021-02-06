import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    display: "flex",
    // flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    // backgroundColor: '#rgba(21,133,130, 0.8)'
  },
  textHead: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 35,
    // marginTop: 35,
    marginLeft: 15,
    // marginBottom: 35,
    color: "black",
  },
  imgLogo: {
    marginTop: 200,
    width: 150,
    height: 150,
    zIndex: -1,
    position: "absolute",
  },
  imgHead: {
    marginTop: 200,
    width: "100%",
    height: "100%",
    zIndex: -1,
    position: "absolute",
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 5,
    marginLeft: 15,
    color: "black",
  },
  Bigevent: {
    display: "flex",
    flexDirection: "row",
  },
  event: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default styles;
