// import Vue from 'vue'
// import Vuew from 'vuex'
// import Mixtape from '@/ethereum/mixtape'
// import User from '@/ethereum/user'
// import web3 from '@/ethereum/web3'

export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  async GET_USER_INFO({ commit }, payload) {
    let randomData = {
      name: 'Test',
      email: 'test',
      password: 'test',
      profileImage: 'testing',
      privateId: 'test'
    }
    const inputData = await axios.post(
      'http://10.100.0.22/api/users',
      randomData
    )
    // const data = await axios.post('http://10.100.0.22/api/users/login', payload)
    // commit('SET_STARS', data)
  }
  // async GET_STARS({ commit }) {
  //   const { data } = await axios.get('http://my-api/stars')
  //   commit('SET_STARS', data)
  // },
  // async registerBeat({commit}, uid) {
  //   commit('setLoading',true)
  //   const user = User(uid)
  //   await user.methods.registerBeat().call() //인자 없이 호출하면 새로운 mixtape이 생성됩니다.
  //   commit('setLoading', false)
  // },
  // async registerRap({commit}, uid) {
  //   commit('setLoading', true)
  //   const user = User(uid)
  //   await user.methods.registerRap(mixtape).call() //rap을 넣고자 하는 mixtape의 주소를 인자로 넣어야 합니다.
  //   commit('setLoading', false)
  // },
  // async donation({commit}, uid) {
  //   let accounts = getters.accounts
  //   commit('setLoading', true)
  //   const user = User(uid)
  //   await user.methods
  //     .donation(mixtape, rapperIndex)
  //     .send({
  //       from: accounts[0],
  //       value: web3.utils.toWei(payload.value, 'ether')}) //도네 하고자 하는 믹스테잎의 주소와 해당되는 래퍼 인덱스를 같이 넣습니다. ( 한 비트에 여러 래퍼가 녹음할 수 있기에 래퍼 배열을 만들었습니다)
  //   commit('setLoading', false)
  // },
  // async distribute({commit}, uid) {
  //   // beatmaker uid as payload for User
  //   commit('setLoading', true)
  //   const user = User(uid)
  //   await user.methods
  //     .distribute(mixtape, producer, rapper, uid)  // 수입을 정산하고자 하는 믹스테입의 주소, 프로듀서와 래퍼의 주소, uid를 입력하여 해쉬값을 검증받은 후 정산합니다.
  //     .call()
  //   commit('setLoading', false)
  // }
}
