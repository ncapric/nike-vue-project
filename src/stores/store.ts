import { createStore, Commit, GetterTree } from 'vuex';

import type { IState } from '@/interfaces/State.interface';
import type { IUser } from '@/interfaces/User.interface';

const store = createStore({
  state:  {
    users: [
       { name: 'Nikola', lastname: 'Nikolic', age: 24 },
       { name: 'Marko', lastname: 'Markovic', age: 90 },
       { name: 'Mitar', lastname: 'Miric', age: 50 }
    ],
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
    getUsers: (state: IState) => state.users
  }
})

export default store;