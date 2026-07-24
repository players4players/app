import { api } from '@controleonline/ui-common/src/api';
import { env as APP_ENV } from '@env';
import { resolveAppDomain } from '@controleonline/ui-common/src/utils/appDomain';

const SET_CURRENT_COMPANY = 'SET_CURRENT_COMPANY';
const SET_DEFAULT_COMPANY = 'SET_DEFAULT_COMPANY';
const SET_COMPANIES = 'SET_COMPANIES';
const SET_ERROR = 'SET_ERROR';
const SET_ISLOADING = 'SET_ISLOADING';

const unwrapResponseData = (data) => data?.response?.data ?? data?.data ?? data;

const normalizeCollection = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== 'object') return [];
  if (Array.isArray(payload.member)) return payload.member;
  if (Array.isArray(payload['hydra:member'])) return payload['hydra:member'];
  if (Array.isArray(payload.items)) return payload.items;
  return [];
};

const actions = {
  defaultCompany({ commit }) {
    commit(SET_ISLOADING, true);

    const appDomain = resolveAppDomain(APP_ENV.DOMAIN);
    const params = appDomain ? { 'app-domain': appDomain } : {};

    return api
      .fetch('/people/company/default', { params })
      .then((data) => {
        const company = unwrapResponseData(data) || {};
        commit(SET_DEFAULT_COMPANY, company);
        return company;
      })
      .catch((error) => {
        commit(SET_ERROR, error?.message || 'Nao foi possivel carregar a empresa padrao.');
        throw error;
      })
      .finally(() => {
        commit(SET_ISLOADING, false);
      });
  },
  myCompanies({ commit }) {
    commit(SET_ISLOADING, true);

    return api
      .fetch('/people/companies/my')
      .then((data) => {
        const companies = normalizeCollection(unwrapResponseData(data));
        commit(SET_COMPANIES, companies);
        commit(SET_CURRENT_COMPANY, companies[0] || {});
        return companies;
      })
      .catch((error) => {
        commit(SET_ERROR, error?.message || 'Nao foi possivel carregar empresas.');
        throw error;
      })
      .finally(() => {
        commit(SET_ISLOADING, false);
      });
  },
  setCurrentCompany({ commit }, company = {}) {
    commit(SET_CURRENT_COMPANY, company || {});
  },
};

const mutations = {
  [SET_CURRENT_COMPANY](state, currentCompany) {
    state.currentCompany = currentCompany || {};
    return 'currentCompany';
  },
  [SET_DEFAULT_COMPANY](state, defaultCompany) {
    state.defaultCompany = defaultCompany || {};
    return 'defaultCompany';
  },
  [SET_COMPANIES](state, companies) {
    state.companies = Array.isArray(companies) ? companies : [];
    return 'companies';
  },
  [SET_ERROR](state, error) {
    state.error = error || '';
    return 'error';
  },
  [SET_ISLOADING](state, isLoading = true) {
    state.isLoading = isLoading === true;
    return 'isLoading';
  },
};

export default {
  namespaced: true,
  state: {
    currentCompany: {},
    defaultCompany: {},
    companies: [],
    isLoading: false,
    error: '',
  },
  getters: {
    currentCompany: (state) => state.currentCompany,
    defaultCompany: (state) => state.defaultCompany,
    companies: (state) => state.companies,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
  },
  actions,
  mutations,
};
