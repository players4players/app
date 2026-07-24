import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';

export default function ZoneStack({ label, count, subtitle }) {
  return (
    <View style={styles.zoneStack}>
      <View style={styles.zoneCardBack}>
        <View style={styles.zoneCardInner} />
      </View>
      <Text style={styles.zoneLabel}>{label}</Text>
      <Text style={styles.zoneCount}>{count}</Text>
      <Text style={styles.zoneSubtitle}>{subtitle}</Text>
    </View>
  );
}
