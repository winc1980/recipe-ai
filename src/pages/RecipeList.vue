<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { generateRecipe } from '../features/generateRecipe/index';
import { getImage } from '../features/getImage/index';

// ルーター
const router = useRouter();
// ストア
const store = useStore();

const recipeData = ref({});

// 進捗バー
const progressVisible = ref(true);

const baseUrl = import.meta.env.BASE_URL;

if (store.state.selectedFoods) {
  (async () => {
    recipeData.value = await generateRecipe(store.state.selectedFoods);
    console.log(recipeData.value);

    recipeData.value['thumbnail'] = [];

    recipeData.value.title_en.forEach(async (title_en) => {
      console.log('fetch image: ', title_en);
      recipeData.value['thumbnail'].push(await getImage(title_en));
    });

    store.commit('generatedRecipe', recipeData.value);
    progressVisible.value = false;
  })();
}
</script>

<template>
  <div :class="progressVisible ? 'loading' : ''">
    <progress class="progress is-small is-primary" max="100">15%</progress>
  </div>
  <header>
    <div class="select-title">
      <img src="/arrow.png" alt="" />
      <span>あなたにオススメのレシピ</span>
    </div>
  </header>
  <main>
    <div class="result">
      <ul>
        <li v-for="name in store.state.selectedFoods">{{ name }}</li>
      </ul>
    </div>

    <div
      v-for="(title, i) in recipeData.title_jp"
      class="recipe"
      @click="router.push({ name: 'RecipeDetail', params: { id: `${i}` } })"
    >
      <img
        :src="
          recipeData.thumbnail[i] ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUvFfPPOkbPc_TFDcRBsSysBhmgZWhLGtPw&usqp=CAU'
        "
        alt=""
      />
      <div class="recipe-text">
        <div class="recipe-title">
          <h2>{{ title }}</h2>
          <p>{{ recipeData.catchcopy[i] }}</p>
        </div>
        <div class="clock">
          <img src="/clock.png" alt="" />
          <span>調理時間:{{ recipeData.time[i] }}分以下</span>
        </div>
        <div class="kcal">
          <img src="/kcal.png" alt="" />
          <span>カロリー:{{ recipeData.kcal[i] }}kcal</span>
        </div>
        <div class="star">
          <img src="/star.png" alt="" />
          <span>難易度:{{ recipeData.difficulty[i] }}</span>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background-color: #ffffff;
  border-bottom: 1px solid #ececec;
  height: 65px;
  margin: auto;
  padding-bottom: 7rem;
}

header img {
  width: 12px;
}

header span {
  color: #442a00;
  font-size: 16px;
  font-weight: 700;
}

main {
  width: 353px;
  margin: 65px auto 0;
}

.select-title {
  max-width: 353px;
  margin: 0 auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: start;
}

.select-title span {
  margin-left: 57px;
}

.result ul li {
  font-size: 14px;
  margin-top: 24px;
  color: #ef797b;
  background-color: #fff4f5;
  height: 32px;
  padding: 4px 12px 5px;
  list-style: none;
  display: inline-block;
  margin-right: 15px;
  font-weight: 700;
}

.list-window {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
}

.list-window span {
  margin-left: 12px;
}

option {
  color: #442a00;
  font-size: 15px;
}

.recipe {
  display: flex;
  border-bottom: 1px solid #ded6ca;
  padding-top: 32px;
}

.recipe img {
  width: 127px;
  height: 115px;
}

.clock,
.kcal,
.star {
  display: flex;
  justify-content: left;
  margin-bottom: 8px;
}

#app {
  max-width: 353px !important;
}

.clock img,
.kcal img,
.star img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.star {
  margin-bottom: 26px;
  object-fit: cover;
  flex-shrink: 0;
}

h2 {
  color: #ef797b;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 3px;
}

.recipe-text {
  width: 205px;
  text-align: left;
  margin: 0;
  margin-left: auto;
}
.recipe-title p {
  color: #442a00;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 12px;
}

.clock span,
.kcal span,
.star span {
  font-size: 12px;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: right;
  background: #ffffff;
  border: none;
  box-sizing: border-box;
  text-decoration: none;
  transition-duration: 0.3s;
}
.btn:hover {
  background-color: #fff4f5;
  color: #442a00;
}

.remodal {
  display: none;
  border-radius: 8px;
  width: 328px;
}

.remodal ul li {
  list-style: none;
  color: #442a00;
  font-size: 15px;
  font-weight: 500;
  padding: 18px 20px;
  border-bottom: 1px solid #ded6ca;
  justify-content: left;
}

.loading {
  width: 100%;
  display: flex;
  justify-content: center;
}
.loading progress {
  position: absolute;
  top: 74px;
}
</style>
