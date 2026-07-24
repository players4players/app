import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';

export default function LifePanel({ label, onDecrement, onIncrement, value }) {
  return (
    <View style={styles.lifePanel}>
      <Text style={styles.lifeLabel}>{label}</Text>
      <View style={styles.lifeControls}>
        <TouchableOpacity style={styles.lifeButton} onPress={onDecrement}>
          <Text style={styles.lifeButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.lifeValue}>{value}</Text>
        <TouchableOpacity style={styles.lifeButton} onPress={onIncrement}>
          <Text style={styles.lifeButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
