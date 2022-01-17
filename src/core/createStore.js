export function createStore(rootReducer, initialState = {}) {
<<<<<<< HEAD
  let state = rootReducer({...initialState}, {type: '__INIT__'})
=======
  let state = rootReducer({...initialState}, {type: '__INIT'})
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7
  let listeners = []

  return {
    subscribe(fn) {
      listeners.push(fn)
      return {
        unsubscribe() {
          listeners = listeners.filter((l) => l !== fn)
        }
      }
    },
    dispatch(action) {
      state = rootReducer(state, action)
      listeners.forEach((listener) => listener(state))
    },
    getState() {
      return JSON.parse(JSON.stringify(state))
    },
  };
}

// export class createStore {
//   constructor() {
//     const state = {}
//     const listeners = []
//   }

//   subscribe() {}

//   dispatch() {}

//   getState() {}
// }
