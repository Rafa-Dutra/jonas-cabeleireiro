import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Tela de confirmação
export default function ConfirmationScreen({ route, navigation }) {
    // pegando os dados enviados pela tela de agendamento
    const { service, date, time, name, phone } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agendamento Confirmado ✅</Text>

            <Text style={styles.label}>Cliente: <Text style={styles.info}>{name}</Text></Text>
            <Text style={styles.label}>Serviço: <Text style={styles.info}>{service}</Text></Text>
            <Text style={styles.label}>Data: <Text style={styles.info}>{date}</Text></Text>
            <Text style={styles.label}>Horário: <Text style={styles.info}>{time}</Text></Text>
            <Text style={styles.label}>Telefone: <Text style={styles.info}>{phone}</Text></Text>

            <Text style={styles.sucess}>
                Seu horário foi enviado para o barbeiro!
            </Text>

            {/* Botão para voltar á Home */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Voltar ao início</Text>
            </TouchableOpacity>
        
        </View>
    );
}

// Estilos visuais
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  info: {
    fontWeight: 'bold',
    color: '#000',
  },
  success: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 25,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});