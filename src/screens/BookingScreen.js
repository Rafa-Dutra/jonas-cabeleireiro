import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


//tela de Agendamento
export default function BookingScreen({ navigation }) {
    
    const[service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    //função para confirmar o agendamento
    const handleConfirm = () => {
        console.log('service:', service);
        console.log('date:', date);
        console.log('time:', time);
        console.log('name:', name);
        console.log('phone:', phone);

        if (!service || !date || !time || !name || !phone){
            alert('Por favor, preencha todos os campos!')
            return;
        }

        navigation.navigate('Confirmation', {service, date, time, name, phone});
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Agende seu horário</Text>

            {/* Campo de seleção do serviço*/}
            <Text style={styles.label}>Serviço desejado</Text>
            <TextInput
                style={styles.input}
                placeholder="EX: Corte + Barba"
                value={service}
                onChangeText={setService}
            />

            {/* Data */}
            <Text style={styles.label}>Data</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 30/10/2025"
                value={date}
                onChangeText={setDate}
            />

            {/* Horário */}
            <Text style={styles.label}>Horário</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 14:00"
                value={time}
                onChangeText={setTime}
            />

            {/* Nome */}
            <Text style={styles.label}>Nome completo</Text>
            <TextInput
                style={styles.input}
                placeholder="Seu nome"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="(11) 99999-9999"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />


            {/* Botão de confirmar */} 
            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                <Text style={styles.buttonText}>Confirmar Agendamento</Text>
            </TouchableOpacity>
        </ScrollView>    
    );
}

// Estilos visuais da tela
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
