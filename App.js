// Importa função principal de navegação
import { NavigationContainer } from '@react-navigation/native';

// Cria a pilha de navegação entre as telas
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa o arquivo com as telas
import AppNavigator from './src/AppNavigator';

// Cria a função principal do app
export default function App() {
  return (
    // NavigationContainer gerencia a navegação em todo o app
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
