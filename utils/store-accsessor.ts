/*
Storeを初期化するモジュール
作成したモジュールをインポートしてstoreに登録する、
新たにモジュールを作成するたびに、作成したモジュールをこのファイルに追加する。
*/

/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

//　ココから↓
import UserStore from '~/store/UserStore';

let userStore: UserStore;

function initialiseStores(store: Store<any>): void {
    userStore = getModule(UserStore, store)
  }
  
  export { initialiseStores, userStore }