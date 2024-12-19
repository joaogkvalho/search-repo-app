import { StatusBar, View } from 'react-native';
import { Users } from './src/screens/Users';

export default function App() {
  return (
    <View>
      <Users />

      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
    </View>
  );
}
