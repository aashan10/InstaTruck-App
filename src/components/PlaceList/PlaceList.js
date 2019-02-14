import React from 'react';
import { StyleSheet,ScrollView, FlatList } from 'react-native';

import ListItem from '../ListItems/ListItem';

const placeList = props => {
    return (
        <FlatList 
        data={props.places}
        renderItem={(info) => (
        <ListItem  
        placeName={info.item.name}
        placeImage={info.item.image} 
        onItemthich={() => props.onItemSelected(info.item.key)} />
        )}
        style={styles.listContainer}></FlatList>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;