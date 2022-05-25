import {Image, StyleSheet, Text, TouchableOpacity, View, Alert, Modal, Pressable } from 'react-native';
import React, {useState} from 'react';
import Title from '../components/title';



const Home = ({navigation}) => {
  // Modal //
const [modalVisible, setModalVisible] = useState(false);

const combine = {
  

}
// pop up menu
const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    return ( 
     <View style={styles.container}>
     {/* Modal */}
         <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
            Welcome to Betfuse!
            </Text>
            <View style={styles.modalbutton}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>View Disclaimer</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>{
                navigation.navigate("Bet");
                setModalVisible(!modalVisible);
                }}>
              <Text style={styles.textStyle}>Proceed to Tips</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal */}
        <Title />
        <View style={styles.bannerContainer}>
          <Image
           source={{
             uri: 'https://i.ibb.co/HBr0Tyc/betfuse.jpg',
}}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
        onPress={() => setModalVisible(true)}
        //  onPress={()=>navigation.navigate("Bet")}
         style={styles.button}>
          <Text style={styles.buttonText}>Stake And Win </Text>
        </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
 
  banner: {
    height: 300,
    width: 300,
    
   
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  
  },
  container: {
    paddingTop: 70,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: "#59147F",
  },
  button:{
    width: '100%',
    backgroundColor: "#F72585",
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 70,
  },
  buttonText:{
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    flex: 1,
    // height: 900,
    width: '97%',
    margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginBottom: 10,
    backgroundColor: "#F72585",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center"
  },
  modalbutton:{
  padding:40
    // flexDirection: 'row',
  }
});