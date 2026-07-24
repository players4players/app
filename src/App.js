import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MessageProvider } from '@controleonline/ui-common/src/react/components/MessageService';
import CheckLogin from '@controleonline/ui-login/src/react/components/CheckLogin';
import loginRoutes from '@controleonline/ui-login/src/react/router/routes';
import { api } from '@controleonline/ui-common/src/api';
import WorkstationScreen from './WorkstationScreen';
import { clearStoredSession } from './lib/session';

const Stack = createNativeStackNavigator();

const routeDefinitions = [
  ...loginRoutes,
  {
    name: 'HomePage',
    component: WorkstationScreen,
    options: {
      headerShown: false,
      title: 'ForPlayers Workstation',
    },
  },
];

export default function App() {
  const navigationRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  const handleLogout = () => {
    clearStoredSession();
    navigationRef.current?.reset({
      index: 0,
      routes: [{ name: 'SignInPage' }],
    });
  };

  useEffect(() => {
    global.api = api;
  }, []);

  return (
    <MessageProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => setNavigationReady(true)}
      >
        {navigationReady ? <CheckLogin /> : null}
        <Stack.Navigator initialRouteName="HomePage">
          {routeDefinitions.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              initialParams={route.initialParams}
              options={route.options}
            >
              {(props) => (
                <route.component
                  {...props}
                  onLogout={route.name === 'HomePage' ? handleLogout : undefined}
                />
              )}
            </Stack.Screen>
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </MessageProvider>
  );
}
