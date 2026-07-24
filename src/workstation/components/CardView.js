import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { CARD_COLORS } from '../mockData';
import { styles } from '../styles';

export default function CardView({ card, selected, compact, onPress, onDoublePress }) {
  const palette = CARD_COLORS[card.color] || CARD_COLORS.arcane;
  const [lastPressAt, setLastPressAt] = useState(0);

  const handlePress = () => {
    const now = Date.now();

    if (now - lastPressAt < 280 && typeof onDoublePress === 'function') {
      onDoublePress(card);
    } else if (typeof onPress === 'function') {
      onPress(card);
    }

    setLastPressAt(now);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={handlePress}
      style={[
        styles.card,
        compact && styles.cardCompact,
        { backgroundColor: palette.frame },
        selected && styles.cardSelected,
        card.tapped && styles.cardTapped,
      ]}
    >
      <View style={styles.cardHeader}>
        <Text numberOfLines={1} style={[styles.cardName, { color: palette.text }]}>
          {card.name}
        </Text>
        <Text style={[styles.cardCost, { color: palette.text }]}>{card.cost}</Text>
      </View>
      <Image source={{ uri: card.art }} style={styles.cardArt} />
      <View style={[styles.cardTextBox, { backgroundColor: palette.body }]}>
        <Text numberOfLines={1} style={[styles.cardType, { color: palette.text }]}>
          {card.type}
        </Text>
        {!compact ? (
          <Text numberOfLines={3} style={[styles.cardRules, { color: palette.text }]}>
            {card.text}
          </Text>
        ) : null}
        {card.stats ? <Text style={[styles.cardStats, { color: palette.text }]}>{card.stats}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}
