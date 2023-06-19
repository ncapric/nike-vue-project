import {
  createStore,
  ActionTree,
  GetterTree,
  MutationTree,
} from 'vuex';

import type { IState } from '@/interfaces/State.interface';
import type { IUser } from '@/interfaces/User.interface';

const state: IState = {
  users: [],
};

const mutations: MutationTree<IState> = {
  setUsers(state, users: IUser[]) {
    state.users = users;
  },

  addUser(state, user: IUser) {
    state.users.push(user);
  },
};

const actions: ActionTree<IState, IState> = {
  setUsers({ commit }) {
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    commit('setUsers', users);
  },

  addUser({ commit, getters }, user: IUser) {
    const updatedUsers = [...getters.getUsers as IUser[], user];
    commit('addUser', user);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  },
}

const getters: GetterTree<IState, IState> = {
  getUsers: state => state.users,

  getRandomUserInitials: state => {
    const randomIndex = Math.floor(Math.random() * state.users.length);
    const randomUser = state.users[randomIndex];

    const initials = `${randomUser.name[0].toUpperCase()}. ${randomUser.lastname[0].toUpperCase()}.`

    return initials
  }
}

const store = createStore({
  state,
  mutations,
  actions,
  getters,
})

export default store;