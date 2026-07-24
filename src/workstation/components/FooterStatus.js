import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';

export default function FooterStatus({ graveyardCount, handCount, libraryCount }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        ForPlayers Workstation mock - Library {libraryCount} - Hand {handCount} - Graveyard {graveyardCount}
      </Text>
      <Text style={styles.footerText}>Visual prototype, no backend actions yet.</Text>
    </View>
  );
}
