import React from 'react';
import { Text, View } from 'react-native';
import CardView from './CardView';
import MatchLog from './MatchLog';
import { styles } from '../styles';

export default function InspectorPanel({ compact, log, selectedCard }) {
  return (
    <View style={[styles.sidePane, compact && styles.sidePaneNarrow]}>
      <View style={styles.previewTabs}>
        <Text style={[styles.previewTab, styles.previewTabActive]}>Card Image</Text>
        <Text style={styles.previewTab}>Additional Information</Text>
      </View>

      {selectedCard ? (
        <View style={styles.previewCard}>
          <CardView card={selectedCard} selected />
          <Text style={styles.previewName}>{selectedCard.name}</Text>
          <Text style={styles.previewType}>{selectedCard.type}</Text>
          <Text style={styles.previewText}>{selectedCard.text}</Text>
          <View style={styles.previewMetaGrid}>
            <Text style={styles.previewMeta}>Cost: {selectedCard.cost}</Text>
            <Text style={styles.previewMeta}>
              Status: {selectedCard.tapped ? 'Tapped' : 'Ready'}
            </Text>
            <Text style={styles.previewMeta}>Edition: FP-MOCK</Text>
          </View>
        </View>
      ) : null}

      <MatchLog log={log} />
    </View>
  );
}
