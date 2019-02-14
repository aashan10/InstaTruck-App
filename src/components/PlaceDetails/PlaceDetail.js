import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const placeDetail = props => {
    let modalContent = null;

    if(props.selectedPlace)
    {
        modalContent = (
                <View>
                    <Image source={props.selectedPlace.image} style={styles.imagestyle} />
                    <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
                </View>
        );
    }
    return(
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
        <View style={styles.modalContainer}>
            {modalContent }
            <View>
                <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
                <Button title="Close" onPress={props.onModalClosed}/>
            </View>
        </View>
    </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    imagestyle:{
        width: "100%",
        height: 300
    },
    placeName:{
        fontWeight : "bold",
        textAlign: "center",
        fontSize: 28
    }

});

export default placeDetail;