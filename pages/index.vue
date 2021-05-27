<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          {{welcomeMsg}}{{userName}}さん</br>
          {{today}}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
          <v-btn
            color="primary"
            nuxt
            @click="onClickButton"
          >
            Click!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

import { userStore } from '~/utils/store-accsessor'


@Component({
  components: {
    Logo,
    VuetifyLogo
  }
})
export default class templateClass extends Vue {

  welcomeMsg = "ようこそ!";

  //子コンポーネントからのデータはこちらでやりとり
  @Prop({ type: String})
  chldProp: string;

  onClickButton() {
    // ボタンが押されたときの処理
    alert("もがー!");
  }


  mounted() {
    // コンポーネントがマウントされたときの処理
    this.addUser(1);
  }

  beforeDestroy() {
    // コンポーネントが破棄される直前の処理
  }

  addUser(newId:number){
    userStore.add({ 'id': newId, 'name': 'サンプル太郎' });
  }

  //以下はcomputed
  get userName(){
    let _userNames = userStore.userNames;
    return _userNames[0];
  }
  get today() {
    let nowDate:Date = new Date();
    return nowDate.toString();
  }
}


</script>
