import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useStore } from '@store';
import Battlefield from './workstation/components/Battlefield';
import FooterStatus from './workstation/components/FooterStatus';
import HandPanel from './workstation/components/HandPanel';
import InspectorPanel from './workstation/components/InspectorPanel';
import PlayerStatusBar from './workstation/components/PlayerStatusBar';
import WorkstationChrome from './workstation/components/WorkstationChrome';
import { getSessionName } from './workstation/mockData';
import { styles } from './workstation/styles';
import useWorkstationMock from './workstation/useWorkstationMock';

export default function WorkstationScreen({ session, navigation, onLogout }) {
  const { width } = useWindowDimensions();
  const isNarrow = width < 980;
  const authStore = useStore('auth');
  const authActions = authStore?.actions || {};
  const authSession = authStore?.getters?.user || session;
  const playerName = getSessionName(authSession);
  const game = useWorkstationMock({ playerName });

  const handleLogout = () => {
    authActions.logOut?.();
    onLogout?.();
    navigation?.reset?.({
      index: 0,
      routes: [{ name: 'SignInPage' }],
    });
  };

  return (
    <View style={styles.screen}>
      <WorkstationChrome onLogout={handleLogout} toolbar={game.toolbar}>
        <View style={styles.zoomViewport}>
          <View style={styles.zoomContent}>
            <View style={[styles.mainLayout, isNarrow && styles.mainLayoutNarrow]}>
              <View style={styles.tablePane}>
                <PlayerStatusBar
                  opponentLife={game.opponentLife}
                  phases={game.phases}
                  phaseIndex={game.phaseIndex}
                  playerLife={game.playerLife}
                  playerName={playerName}
                  setOpponentLife={game.setOpponentLife}
                  setPhase={game.setPhase}
                  setPlayerLife={game.setPlayerLife}
                />

                <Battlefield
                  compact={isNarrow}
                  game={game}
                  playerName={playerName}
                />

                <HandPanel
                  hand={game.hand}
                  selectedCardId={game.selectedCardId}
                  onDiscard={game.moveToGraveyard}
                  onPlay={game.playFromHand}
                  onSelect={game.selectCard}
                />
              </View>

              <InspectorPanel
                compact={isNarrow}
                log={game.log}
                selectedCard={game.selectedCard}
              />
            </View>

            <FooterStatus
              graveyardCount={game.graveyard.length}
              handCount={game.hand.length}
              libraryCount={game.library.length}
            />
          </View>
        </View>
      </WorkstationChrome>
    </View>
  );
}
