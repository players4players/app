export const PHASES = ['Untap', 'Draw', 'Main', 'Combat', 'Second', 'End'];

export const ART = {
  relic:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="260" viewBox="0 0 360 260"><rect width="360" height="260" fill="%2312213b"/><circle cx="174" cy="124" r="86" fill="%2338bdf8" opacity=".22"/><path d="M176 42 286 124 176 218 66 124Z" fill="%23f8fafc" opacity=".14"/><path d="M176 64 255 126 176 194 96 126Z" fill="none" stroke="%2367e8f9" stroke-width="8"/><path d="M106 79 250 189M254 76 104 190" stroke="%23a78bfa" stroke-width="5" opacity=".75"/></svg>',
  forge:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="260" viewBox="0 0 360 260"><rect width="360" height="260" fill="%23271316"/><path d="M0 214 C58 150 102 170 152 114 C204 56 258 52 360 20 L360 260 L0 260Z" fill="%23f97316" opacity=".35"/><circle cx="230" cy="92" r="44" fill="%23fde68a" opacity=".8"/><path d="M50 198 L150 112 L198 152 L284 54" stroke="%23fed7aa" stroke-width="12" fill="none"/><path d="M45 220 H316" stroke="%237f1d1d" stroke-width="20"/></svg>',
  forest:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="260" viewBox="0 0 360 260"><rect width="360" height="260" fill="%230f2f1d"/><path d="M40 232 122 52 198 232Z" fill="%2322c55e" opacity=".42"/><path d="M132 232 214 30 304 232Z" fill="%2384cc16" opacity=".4"/><path d="M86 232 172 78 262 232Z" fill="%23166534" opacity=".85"/><path d="M0 226 C78 199 129 214 195 188 C251 166 301 176 360 150 L360 260 L0 260Z" fill="%2305210d"/></svg>',
  tide:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="260" viewBox="0 0 360 260"><rect width="360" height="260" fill="%230c1f38"/><path d="M0 178 C62 128 111 229 180 168 C241 113 288 170 360 112 L360 260 L0 260Z" fill="%2338bdf8" opacity=".48"/><path d="M0 214 C65 175 125 250 190 196 C250 146 300 200 360 158 L360 260 L0 260Z" fill="%23bae6fd" opacity=".42"/><circle cx="268" cy="70" r="38" fill="%23e0f2fe" opacity=".8"/></svg>',
  sentinel:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="260" viewBox="0 0 360 260"><rect width="360" height="260" fill="%2328220f"/><path d="M116 220 150 70 208 70 244 220Z" fill="%23facc15" opacity=".36"/><path d="M162 58 H200 L218 108 L202 204 H158 L142 108Z" fill="%23f8fafc" opacity=".64"/><path d="M142 116 H218M154 166 H206" stroke="%2371310f" stroke-width="10"/><circle cx="180" cy="38" r="26" fill="%23fde68a"/></svg>',
  shadow:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="260" viewBox="0 0 360 260"><rect width="360" height="260" fill="%230f172a"/><path d="M71 224 C85 117 151 58 240 34 C214 91 232 130 302 152 C230 160 185 194 168 236Z" fill="%238b5cf6" opacity=".46"/><path d="M104 205 C121 142 153 112 211 82" stroke="%23c4b5fd" stroke-width="9" fill="none" opacity=".7"/><circle cx="93" cy="78" r="28" fill="%236d28d9" opacity=".65"/></svg>',
};

export const CARD_COLORS = {
  arcane: { frame: '#78d6f7', body: '#dff7ff', text: '#102a43' },
  ember: { frame: '#e0715f', body: '#ffd6c9', text: '#3b160d' },
  grove: { frame: '#61b76b', body: '#dcf7df', text: '#102a17' },
  gold: { frame: '#c7a94c', body: '#fbf0c2', text: '#33280b' },
  umbra: { frame: '#70617d', body: '#e8ddf3', text: '#20152a' },
};

export const MOCK_CARDS = {
  crystalMatrix: {
    id: 'crystal-matrix',
    name: 'Crystal Matrix',
    cost: '6',
    type: 'Artifact',
    text: '+1 Magic, +3 Tower. Ready another relic when this enters play.',
    stats: '',
    art: ART.relic,
    color: 'arcane',
  },
  emberQuarry: {
    id: 'ember-quarry',
    name: 'Ember Quarry',
    cost: '3',
    type: 'Resource',
    text: '+1 Quarry. Tap: add one red charge to your pool.',
    stats: '',
    art: ART.forge,
    color: 'ember',
  },
  elderGrove: {
    id: 'elder-grove',
    name: 'Elder Grove',
    cost: '2',
    type: 'Terrain',
    text: 'Tap: restore 1 life. Untap a creature if you control a relic.',
    stats: '',
    art: ART.forest,
    color: 'grove',
  },
  tideScholar: {
    id: 'tide-scholar',
    name: 'Tide Scholar',
    cost: '4',
    type: 'Creature - Wizard',
    text: 'When played, draw a card. Spells you cast cost 1 less this turn.',
    stats: '2/4',
    art: ART.tide,
    color: 'arcane',
  },
  gateSentinel: {
    id: 'gate-sentinel',
    name: 'Gate Sentinel',
    cost: '5',
    type: 'Creature - Guard',
    text: 'Defender. Whenever you pass combat, gain +1 shield.',
    stats: '3/6',
    art: ART.sentinel,
    color: 'gold',
  },
  duskAssassin: {
    id: 'dusk-assassin',
    name: 'Dusk Assassin',
    cost: '3',
    type: 'Creature - Rogue',
    text: 'Ambush. Tap: deal 1 damage to a tapped enemy unit.',
    stats: '3/2',
    art: ART.shadow,
    color: 'umbra',
  },
};

export const INITIAL_PLAYER_BATTLEFIELD = [
  { ...MOCK_CARDS.elderGrove, instanceId: 'p-battlefield-1', tapped: false },
  { ...MOCK_CARDS.gateSentinel, instanceId: 'p-battlefield-2', tapped: true },
  { ...MOCK_CARDS.crystalMatrix, instanceId: 'p-battlefield-3', tapped: false },
];

export const INITIAL_OPPONENT_BATTLEFIELD = [
  { ...MOCK_CARDS.emberQuarry, instanceId: 'o-battlefield-1', tapped: false },
  { ...MOCK_CARDS.duskAssassin, instanceId: 'o-battlefield-2', tapped: true },
  { ...MOCK_CARDS.tideScholar, instanceId: 'o-battlefield-3', tapped: false },
];

export const INITIAL_HAND = [
  { ...MOCK_CARDS.tideScholar, instanceId: 'hand-1', tapped: false },
  { ...MOCK_CARDS.emberQuarry, instanceId: 'hand-2', tapped: false },
  { ...MOCK_CARDS.duskAssassin, instanceId: 'hand-3', tapped: false },
  { ...MOCK_CARDS.elderGrove, instanceId: 'hand-4', tapped: false },
];

export const INITIAL_LIBRARY = [
  { ...MOCK_CARDS.crystalMatrix, instanceId: 'deck-1', tapped: false },
  { ...MOCK_CARDS.gateSentinel, instanceId: 'deck-2', tapped: false },
  { ...MOCK_CARDS.tideScholar, instanceId: 'deck-3', tapped: false },
  { ...MOCK_CARDS.emberQuarry, instanceId: 'deck-4', tapped: false },
];

export function getSessionName(session) {
  return String(
    session?.name ||
      session?.peopleName ||
      session?.user ||
      session?.username ||
      'Player',
  );
}

export function createLogEntry(text) {
  const timestamp = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `[${timestamp}] ${text}`;
}
