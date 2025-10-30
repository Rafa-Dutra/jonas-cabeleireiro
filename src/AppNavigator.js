import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import BookingScreen from './screens/BookingScreen';
import LocationScreen from './screens/LocationScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

// Cria a pilha de navegação
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Jonas Cabelereiro' }}
      />
      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{ title: 'Serviços e Preços' }}
      />
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{ title: 'Agendamento' }}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{ title: 'Localização' }}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={{ title: 'Confirmação' }}
      />
    </Stack.Navigator>
  );
}
