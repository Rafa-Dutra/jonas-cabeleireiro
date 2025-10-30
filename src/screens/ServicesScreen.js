// Importa componentes visuais do React Native
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Lista de serviços fixos com seus preços
const services = [
  { id: '1', name: 'Corte simples', price: 35 },
  { id: '2', name: 'Corte + Barba', price: 50 },
  { id: '3', name: 'Sobrancelha', price: 10 },
  { id: '4', name: 'Pézinho', price: 10 },
  { id: '5', name: 'Descolorir cabelo', price: 45 },
  { id: '6', name: 'Barba', price: 20 },
  { id: '7', name: 'Risquinho', price: 10 },
  { id: '8', name: 'Lavagem / Escova', price: 30 },
];

// Componente principal da tela de serviços
export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Serviços e Preços</Text>

      {/* FlatList renderiza listas de forma eficiente */}
      <FlatList
        data={services} // dados a serem exibidos
        keyExtractor={(item) => item.id} // define chave única de cada item
        renderItem={({ item }) => (
          // Cada serviço é mostrado em uma linha separada
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>R$ {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // fundo branco simples
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row', // coloca nome e preço lado a lado
    justifyContent: 'space-between', // espaço igual entre nome e preço
    paddingVertical: 12,
    borderBottomWidth: 1, // linha separando os itens
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});
