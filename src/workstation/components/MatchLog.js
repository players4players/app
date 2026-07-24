import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../styles';

export default function MatchLog({ log }) {
  return (
    <View style={styles.logPanel}>
      <Text style={styles.logTitle}>Match Log</Text>
      <ScrollView style={styles.logScroll}>
        {log.map((entry, index) => (
          <Text key={`${entry}-${index}`} style={styles.logEntry}>
            {entry}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
