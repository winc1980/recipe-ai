import { createApp } from 'vue';
import { createStore } from 'vuex';
import router from './router/index';
import './style.css';
import App from './App.vue';

// ストア
const store = createStore({
  state() {
    return {
      // 食材リスト（JPとEN）
      foods: {
        // jp: ['ex_りんご', 'ex_きゅうり'],
        // en: ['apple', 'cucumber'],
        // thumbnail: [
        //   'https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg',
        //   'https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg',
        // ],
        jp: [],
        en: [],
        thumbnail: [],
      },
      // 選択した食材（食材の名前）
      selectedFoods: [],
    };
  },
  mutations: {
    addFoods(state, data) {
      console.log('ストアに食材を保存...');
      state.foods.jp = data.jp;
      state.foods.en = data.en;
      state.foods.thumbnail = data.thumbnail;
    },
    selectFood(state, name) {
      console.log('selectFood...');
      state.selectedFoods.push(name);
    },
    unSelectFood(state, name) {
      console.log('unSelectFood...');
      state.selectedFoods = state.selectedFoods.filter((n) => n !== name);
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
