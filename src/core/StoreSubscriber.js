import {isEqual} from './utils'

export class StoreSubscriber {
  constructor(store) {
    this.store = store
    this.sub = null
    this.prevState = {}
  }

  subscribeComponents(components) {
    this.prevState = this.store.getState()

    this.sub = this.store.subscribe((state) => {
      Object.keys(state).forEach((key) => {
        if (!isEqual(this.prevState[key], state[key])) {
          components.forEach((component) => {
            if (component.isWatching(key)) {
              const changes = {[key]: state[key]}
              component.storeChanged(changes)
            }
          })
        }
<<<<<<< HEAD
=======
        // console.log(key);
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7
      })

      this.prevState = this.store.getState()
    })
  }

  unsubscribeFromStore() {
    this.sub.unsubscribe()
  }
}
