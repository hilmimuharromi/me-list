import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, NewTaskScreen, ListTasksScreen, AboutScreen } from './src/screens'
import { store, persistor } from './src/stores';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RNBootSplash from "react-native-bootsplash";
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewTask" component={NewTaskScreen} />
      <Stack.Screen name="ListTasks" component={ListTasksScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  useEffect(() => {
    // Hide SplashScreen after 3secs or Make an async task
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 1000);
    // RNBootSplash.hide({ fade: true })
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  )
}

export default App;
