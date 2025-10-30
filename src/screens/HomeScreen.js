import { View, Text, Button, StyleSheet } from 'react-native';

// Tela inicial do app
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jonas Cabelereiro</Text>
      <Text style={styles.subtitle}>Seu estilo em boas mãos!</Text>

      {/* Botões de navegação */}
      <Button title="Ver Serviços" onPress={() => navigation.navigate('Services')} />
      <Button title="Agendar Horário" onPress={() => navigation.navigate('Booking')} />
      <Button title="Localização" onPress={() => navigation.navigate('Location')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
});
