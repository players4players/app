const SET_COLORS = 'SET_COLORS';
const SET_MENUS = 'SET_MENUS';

const colors = {
  primary: '#2563eb',
  secondary: '#0f172a',
  success: '#16a34a',
  danger: '#dc2626',
  warning: '#d97706',
  pageBackground: '#f6f8fb',
  cardBackground: '#ffffff',
  cardBorder: '#d8e0ea',
  textPrimary: '#111827',
  textSecondary: '#374151',
  textMuted: '#6b7280',
  inputBackground: '#ffffff',
  inputBorder: '#cbd5e1',
  inputText: '#111827',
  inputPlaceholderText: '#64748b',
  buttonText: '#ffffff',
};

export default {
  namespaced: true,
  state: {
    colors,
    menus: [],
  },
  getters: {
    colors: (state) => state.colors,
    menus: (state) => state.menus,
  },
  actions: {
    setColors({ commit }, nextColors = {}) {
      commit(SET_COLORS, nextColors);
    },
    setMenus({ commit }, menus = []) {
      commit(SET_MENUS, menus);
    },
  },
  mutations: {
    [SET_COLORS](state, nextColors = {}) {
      state.colors = { ...state.colors, ...nextColors };
      return 'colors';
    },
    [SET_MENUS](state, menus = []) {
      state.menus = Array.isArray(menus) ? menus : [];
      return 'menus';
    },
  },
};
