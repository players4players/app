import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LifePanel from './LifePanel';
import { styles } from '../styles';

export default function PlayerStatusBar({
  opponentLife,
  phases,
  phaseIndex,
  playerLife,
  playerName,
  setOpponentLife,
  setPhase,
  setPlayerLife,
}) {
  return (
    <View style={styles.statusStrip}>
      <LifePanel
        label="Opponent"
        value={opponentLife}
        onDecrement={() => setOpponentLife((value) => value - 1)}
        onIncrement={() => setOpponentLife((value) => value + 1)}
      />
      <View style={styles.phaseStrip}>
        {phases.map((phase, index) => (
          <TouchableOpacity
            key={phase}
            onPress={() => setPhase(index)}
            style={[styles.phaseButton, index === phaseIndex && styles.phaseButtonActive]}
          >
            <Text
              style={[
                styles.phaseButtonText,
                index === phaseIndex && styles.phaseButtonTextActive,
              ]}
            >
              {phase}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <LifePanel
        label={playerName}
        value={playerLife}
        onDecrement={() => setPlayerLife((value) => value - 1)}
        onIncrement={() => setPlayerLife((value) => value + 1)}
      />
    </View>
  );
}
