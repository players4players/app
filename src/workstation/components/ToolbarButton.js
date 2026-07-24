import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export default function ToolbarButton({ children, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.78} onPress={onPress} style={styles.toolbarButton}>
      <Text style={styles.toolbarButtonText}>{children}</Text>
    </TouchableOpacity>
  );
}
