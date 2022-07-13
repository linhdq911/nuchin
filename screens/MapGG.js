import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  const [pin, setPin] = useState({
    latitude: 20.3007,
    longitude: 106.1205,
  });

  const [region, setRegion] = React.useState({
    latitude: 20.3007,
    longitude: 106.1205,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const origin = {latitude: 37.3318456, longitude: -122.0296002};
  const destination = {latitude: 37.771707, longitude: -122.4053769};
  // const GOOGLE_MAPS_APIKEY = 'AIzaSyDhRb5grN41dVwygXXq5Mnf7brFRM4vxHQ';

  return (
    <View style={{flex: 1}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: 'AIzaSyDhRb5grN41dVwygXXq5Mnf7brFRM4vxHQ',
          language: 'en',
          components: 'country:us',
          types: 'establishment',
          radius: 1000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {flex: 0, position: 'absolute', width: '100%', zIndex: 1},
          listView: {backgroundColor: 'white'},
        }}
      />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 20.3007,
          longitude: 106.1205,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={pin}
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}>
          <Callout>
            <Text>Dinh Quang Linh</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />

        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        /> */}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
