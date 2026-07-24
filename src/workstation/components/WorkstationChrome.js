import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ToolbarButton from './ToolbarButton';
import { styles } from '../styles';

export default function WorkstationChrome({ children, onLogout, toolbar }) {
  return (
    <View style={styles.window}>
      <View style={styles.workspaceHeader}>
        <View>
          <Text style={styles.workspaceEyebrow}>ForPlayers</Text>
          <Text style={styles.workspaceTitle}>Match Workstation</Text>
        </View>

        <View style={styles.workspaceMeta}>
          <Text style={styles.zoomBadge}>Compact 88%</Text>
          <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
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
