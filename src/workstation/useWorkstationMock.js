import { useMemo, useState } from 'react';
import {
  createLogEntry,
  INITIAL_HAND,
  INITIAL_LIBRARY,
  INITIAL_OPPONENT_BATTLEFIELD,
  INITIAL_PLAYER_BATTLEFIELD,
  MOCK_CARDS,
  PHASES,
} from './mockData';

export default function useWorkstationMock({ playerName }) {
  const [phaseIndex, setPhaseIndex] = useState(2);
  const [selectedCardId, setSelectedCardId] = useState('p-battlefield-3');
  const [playerLife, setPlayerLife] = useState(20);
  const [opponentLife, setOpponentLife] = useState(18);
  const [playerBattlefield, setPlayerBattlefield] = useState(INITIAL_PLAYER_BATTLEFIELD);
  const [opponentBattlefield, setOpponentBattlefield] = useState(INITIAL_OPPONENT_BATTLEFIELD);
  const [hand, setHand] = useState(INITIAL_HAND);
  const [library, setLibrary] = useState(INITIAL_LIBRARY);
  const [graveyard, setGraveyard] = useState([
    { ...MOCK_CARDS.duskAssassin, instanceId: 'grave-1' },
  ]);
  const [log, setLog] = useState([
    createLogEntry('Mock match loaded. Visual mode is active.'),
    createLogEntry('Player keeps opening hand.'),
    createLogEntry('Opponent plays Ember Quarry.'),
  ]);

  const allVisibleCards = useMemo(
    () => [...playerBattlefield, ...opponentBattlefield, ...hand, ...graveyard],
    [graveyard, hand, opponentBattlefield, playerBattlefield],
  );
  const selectedCard =
    allVisibleCards.find((card) => card.instanceId === selectedCardId) ||
    playerBattlefield[0] ||
    hand[0];

  const pushLog = (text) => {
    setLog((items) => [createLogEntry(text), ...items].slice(0, 16));
  };

  const selectCard = (card) => setSelectedCardId(card.instanceId);

  const toggleCardTap = (card) => {
    const updater = (items) =>
      items.map((item) =>
        item.instanceId === card.instanceId ? { ...item, tapped: !item.tapped } : item,
      );

    setPlayerBattlefield(updater);
    setOpponentBattlefield(updater);
    pushLog(`${card.name} ${card.tapped ? 'untapped' : 'tapped'}.`);
  };

  const playFromHand = (card) => {
    setHand((items) => items.filter((item) => item.instanceId !== card.instanceId));

    const playedCard = {
      ...card,
      instanceId: `p-battlefield-${Date.now()}`,
      tapped: false,
    };

    setPlayerBattlefield((items) => [...items, playedCard]);
    setSelectedCardId(playedCard.instanceId);
    pushLog(`${playerName} plays ${card.name} from hand.`);
  };

  const moveToGraveyard = (card) => {
    setPlayerBattlefield((items) => items.filter((item) => item.instanceId !== card.instanceId));
    setOpponentBattlefield((items) => items.filter((item) => item.instanceId !== card.instanceId));
    setHand((items) => items.filter((item) => item.instanceId !== card.instanceId));
    setGraveyard((items) => [
      { ...card, tapped: false, instanceId: `grave-${Date.now()}` },
      ...items,
    ]);
    pushLog(`${card.name} moved to graveyard.`);
  };

  const drawCard = () => {
    if (library.length === 0) {
      pushLog('Library is empty.');
      return;
    }

    const [nextCard, ...remainingCards] = library;
    const drawnCard = {
      ...nextCard,
      instanceId: `hand-${Date.now()}`,
      tapped: false,
    };

    setLibrary(remainingCards);
    setHand((items) => [...items, drawnCard]);
    setSelectedCardId(drawnCard.instanceId);
    pushLog(`${playerName} draws ${drawnCard.name}.`);
  };

  const passPhase = () => {
    const nextPhaseIndex = (phaseIndex + 1) % PHASES.length;
    setPhaseIndex(nextPhaseIndex);
    pushLog(`Phase changed to ${PHASES[nextPhaseIndex]}.`);
  };

  const setPhase = (index) => {
    setPhaseIndex(index);
    pushLog(`Phase set to ${PHASES[index]}.`);
  };

  const untapAll = () => {
    setPlayerBattlefield((items) => items.map((item) => ({ ...item, tapped: false })));
    pushLog(`${playerName} untaps all permanents.`);
  };

  return {
    graveyard,
    hand,
    library,
    log,
    opponentBattlefield,
    opponentLife,
    phaseIndex,
    phases: PHASES,
    playerBattlefield,
    playerLife,
    selectedCard,
    selectedCardId,
    moveToGraveyard,
    playFromHand,
    selectCard,
    setOpponentLife,
    setPhase,
    setPlayerLife,
    toggleCardTap,
    toolbar: {
      drawCard,
      passPhase,
      pushThinking: () => pushLog('Thinking... priority held.'),
      untapAll,
    },
  };
}
