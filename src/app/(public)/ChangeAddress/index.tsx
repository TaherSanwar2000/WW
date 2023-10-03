import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const ChangeAddress = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyBPtE26To0HxracVUIB2LtDBuVM3umT4bg', // Replace with your Google Cloud API key
          language: 'en',
        }}
        listViewDisplayed='auto' // This will display the list of suggestions automatically
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:'10%'
  },
});

export default ChangeAddress;