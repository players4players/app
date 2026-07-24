import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import CardView from './CardView';
import SlotActions from './SlotActions';
import { styles } from '../styles';

export default function HandPanel({ hand, onDiscard, onPlay, onSelect, selectedCardId }) {
  return (
    <View style={styles.handPanel}>
      <View style={styles.handHeader}>
        <Text style={styles.handTitle}>Hand</Text>
        <Text style={styles.handHint}>
          Click to preview. Double click or Play to put on battlefield.
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator style={styles.handScroll}>
        {hand.map((card) => (
          <View key={card.instanceId} style={styles.handCardWrap}>
            <CardView
              card={card}
              compact
              selected={selectedCardId === card.instanceId}
              onPress={onSelect}
              onDoublePress={onPlay}
            />
            <SlotActions
              primaryLabel="Play"
              secondaryLabel="Discard"
              onPrimary={() => onPlay(card)}
              onSecondary={() => onDiscard(card)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
