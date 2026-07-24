import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ToolbarButton from './ToolbarButton';
import { styles } from '../styles';

export default function WorkstationChrome({ children, onLogout, toolbar }) {
  return (
    <View style={styles.window}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>ForPlayers Workstation [Mock Match]</Text>
        <View style={styles.windowControls}>
          <Text style={styles.windowControl}>_</Text>
          <Text style={styles.windowControl}>[]</Text>
          <TouchableOpacity onPress={onLogout} style={styles.closeControl}>
            <Text style={styles.closeControlText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menuBar}>
        {['File', 'Edit', 'View', 'Game', 'Cards', 'Tools', 'Help'].map((item) => (
          <Text key={item} style={styles.menuItem}>
            {item}
          </Text>
        ))}
      </View>

      <View style={styles.toolbar}>
        <ToolbarButton onPress={toolbar.drawCard}>Draw</ToolbarButton>
        <ToolbarButton onPress={toolbar.untapAll}>Untap All</ToolbarButton>
        <ToolbarButton onPress={toolbar.passPhase}>Pass Phase</ToolbarButton>
        <ToolbarButton onPress={toolbar.pushThinking}>Thinking</ToolbarButton>
        <ToolbarButton onPress={onLogout}>Logout</ToolbarButton>
      </View>

      {children}
    </View>
  );
}
