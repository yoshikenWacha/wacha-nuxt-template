import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

export interface User {
  id: number
  name: string
}

@Module({ name: 'UserStore', namespaced: true, stateFactory: true })
export default class UserStore extends VuexModule {
  private _users: User[] = []

  get users(): User[] {
    return this._users
  }

  get userNames(): string[] {
    return this._users.map((x) => x.name)
  }

  @Mutation
  private _add(user: User): void {
    this._users.push(user)
  }

  @Action({ rawError: true })
  add(user: User) {
    this._add(user)
  }
}
