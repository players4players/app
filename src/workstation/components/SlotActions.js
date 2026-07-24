import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';

export default function SlotActions({ primaryLabel, secondaryLabel, onPrimary, onSecondary }) {
  return (
    <View style={styles.slotActions}>
      <TouchableOpacity style={styles.slotButton} onPress={onPrimary}>
        <Text style={styles.slotButtonText}>{primaryLabel}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.slotButton} onPress={onSecondary}>
        <Text style={styles.slotButtonText}>{secondaryLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
