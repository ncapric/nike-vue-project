import { createStore, Commit, GetterTree } from 'vuex';

import type { IState } from '@/interfaces/State.interface';
import type { IUser } from '@/interfaces/User.interface';

function getUserInitials(user: IUser) {
  const initials = `${user.name[0].toUpperCase()}. ${user.lastname[0].toUpperCase()}.`
  return initials
}

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
      const updatedUsers = [...getters.users, user];
      commit('addUser', user);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    },
    clearUsers() {

    }
  },
  getters: {
    users: (state: IState) => { 
      return state.users 
    },
    userInitials: (state: IState) => {
      const randomIndex = Math.floor(Math.random() * state.users.length);
      const randomUser = state.users[randomIndex];

      return getUserInitials(randomUser);
    }
  },
})


export default store;

