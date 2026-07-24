import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import BattlefieldRow from './BattlefieldRow';
import GraveyardZone from './GraveyardZone';
import LibraryZone from './LibraryZone';
import { styles } from '../styles';

export default function Battlefield({ compact, game }) {
  return (
    <ScrollView style={styles.battlefield} contentContainerStyle={styles.battlefieldContent}>
      <View style={styles.tableZones}>
        <View style={styles.sideZone}>
          <LibraryZone count="34" opponent />
          <GraveyardZone count="2" opponent />
        </View>

        <View style={styles.boardZone}>
          <BattlefieldRow
            title="Opponent battlefield"
            cards={game.opponentBattlefield}
            selectedCardId={game.selectedCardId}
            onSelect={game.selectCard}
            onToggleTap={game.toggleCardTap}
            onMoveToGraveyard={game.moveToGraveyard}
            compact={compact}
          />

          <View style={styles.centerDivider}>
            <Text style={styles.centerDividerText}>
              Match 1 - {game.phases[game.phaseIndex]} phase
            </Text>
          </View>

          <BattlefieldRow
            title="Your battlefield"
            cards={game.playerBattlefield}
            selectedCardId={game.selectedCardId}
            onSelect={game.selectCard}
            onToggleTap={game.toggleCardTap}
            onMoveToGraveyard={game.moveToGraveyard}
            compact={compact}
          />
        </View>

        <View style={styles.sideZone}>
          <LibraryZone count={game.library.length} />
          <GraveyardZone
            count={game.graveyard.length}
            latestCardName={game.graveyard[0]?.name}
          />
        </View>
      </View>
    </ScrollView>
  );
}
