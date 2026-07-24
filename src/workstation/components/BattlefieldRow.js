import React from 'react';
import { Text, View } from 'react-native';
import CardView from './CardView';
import SlotActions from './SlotActions';
import { styles } from '../styles';

export default function BattlefieldRow({
  cards,
  compact,
  onMoveToGraveyard,
  onSelect,
  onToggleTap,
  selectedCardId,
  title,
}) {
  return (
    <View style={styles.battlefieldRow}>
      <View style={styles.rowHeader}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowMeta}>{cards.length} permanents</Text>
      </View>
      <View style={styles.cardGrid}>
        {cards.map((card) => (
          <View key={card.instanceId} style={styles.boardCardSlot}>
            <CardView
              card={card}
              compact={compact}
              selected={selectedCardId === card.instanceId}
              onPress={onSelect}
              onDoublePress={onToggleTap}
            />
            <SlotActions
              primaryLabel={card.tapped ? 'Untap' : 'Tap'}
              secondaryLabel="Grave"
              onPrimary={() => onToggleTap(card)}
              onSecondary={() => onMoveToGraveyard(card)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
