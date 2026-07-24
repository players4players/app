import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginScreen from './LoginScreen';
import { clearStoredSession, hasStoredSession, readStoredSession } from './lib/session';

function getSessionName(session) {
  return String(
    session?.name ||
      session?.peopleName ||
      session?.user ||
      session?.username ||
      'Usuario autenticado',
  );
}

function HomeScreen({ session, onLogout }) {
  const sessionName = useMemo(() => getSessionName(session), [session]);

  return (
    <View style={styles.home}>
      <View style={styles.panel}>
        <Text style={styles.kicker}>ForPlayers</Text>
        <Text style={styles.title}>Login concluido</Text>
        <Text style={styles.subtitle}>{sessionName}</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  const [session, setSession] = useState(() => readStoredSession());
  const isAuthenticated = hasStoredSession(session);

  const handleAuthenticated = (nextSession) => {
    setSession(nextSession || readStoredSession());
  };

  const handleLogout = () => {
    clearStoredSession();
    setSession(null);
  };

  if (isAuthenticated) {
    return <HomeScreen session={session} onLogout={handleLogout} />;
  }

  return <LoginScreen onAuthenticated={handleAuthenticated} />;
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f8fb',
    padding: 24,
  },
  panel: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d8e0ea',
    padding: 24,
  },
  kicker: {
    color: '#2563eb',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    color: '#111827',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: '#4b5563',
    fontSize: 16,
    marginBottom: 24,
  },
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#111827',
    minHeight: 44,
    paddingHorizontal: 18,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});
