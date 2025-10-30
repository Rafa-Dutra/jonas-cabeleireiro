import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Coorrdenadas da barbearia (Exemplo)
const barbershopLocation = {
  latitude: -23.660650,
  longitude: -46.550660,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};
export default function LocationScreen(){
//Abrir rota maps
const openMaps = () => {
    const url = 'https://www.google.com/maps/dir/?api=1&destination=${barbershopLocation.latitude},${barbershopLocation.longitude}';
    linking.openURL(url);
};

return (
    <View style={styles.container}>

        <Text style={styles.title}>Localizaação da Barbearia</Text>

        <MapView
        style={styles.map}
        initialRegion={barbershopLocation}
    >
        {/* Marcador do local */}
        <Marker coordinate={barbershopLocation} title='Jonas Cabelereiro'/>
    </MapView>

    <TouchableOpacity style={styles.button} onPress={openMaps}>
        <Text style={styles.buttonText}>Ver rota no Google Maps</Text>
    </TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});