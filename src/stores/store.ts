import { createStore, Commit, GetterTree } from 'vuex';

import type { IState } from '@/interfaces/State.interface';
import type { IUser } from '@/interfaces/User.interface';

const store = createStore({
  state:  {
    users: [],
  },
  mutations: {
    setUsers(state: IState, users: IUser[]) {
      state.users = users;
    },
    addUser(state: IState, user: IUser) {
      state.users.push(user);
    },
  },
  actions: {
    setUsers({ commit } : { commit: Commit }) {
      const storedUsers = localStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      commit('setUsers', users);
    },
    addUser({ commit, getters } : { commit: Commit, getters: GetterTree<IState, IState> }, user: IUser) {
      const updatedUsers = [...getters.getUsers, user];
      commit('addUser', user);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    },
    saveUsers({ commit } : { commit: Commit }, users: IUser[] ) {
      commit('setUsers', users);
    }
  },
  getters: {
    getUsers: (state: IState) => { 
      return state.users 
    },
    getRandomUserInitials: (state: IState) => {
      const randomIndex = Math.floor(Math.random() * state.users.length);
      const randomUser = state.users[randomIndex];

      const initials = `${randomUser.name[0].toUpperCase()}. ${randomUser.lastname[0].toUpperCase()}.`

      return initials
    }
  },
})

export default store;