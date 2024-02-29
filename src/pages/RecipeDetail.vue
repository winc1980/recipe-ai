<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { generateRecipeDetail } from '../features/generateRecipeDetail';

// ルーター
const router = useRouter();
// ストア
const store = useStore();

// 選択したレシピのID
const recipeId = parseInt(router.currentRoute.value.params.id);
// 進捗バー
const progressVisible = ref(true);

const recipeData = ref({});

console.log('generated Recipe List:', store.state.generatedRecipe);

(async () => {
  recipeData.value = await generateRecipeDetail(
    store.state.generatedRecipe.title_jp[recipeId]
  );
  console.log(recipeData.value);
  progressVisible.value = false;
})();
</script>

<template>
  <div :class="progressVisible ? 'loading' : ''">
    <progress class="progress is-small is-primary" max="100">15%</progress>
  </div>
  <header>
    <div class="select-title">
      <img
        src="/arrow.png"
        alt="back"
        @click="router.push({ name: 'RecipeList' })"
      />
      <span>レシピ詳細</span>
      <!-- ここのcss要修正 -->
    </div>
  </header>
  <figure>
    <!-- ここにレシピの画像入れてください -->
    <div class="recipe-photo">
      <img
        :src="
          store.state.generatedRecipe.thumbnail[recipeId] ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUvFfPPOkbPc_TFDcRBsSysBhmgZWhLGtPw&usqp=CAU'
        "
        alt=""
      />
    </div>
  </figure>
  <main>
    <div class="container">
      <!-- ここにコーディングしてください -->
      <div class="recipe-info">
        <h1 class="recipe-name">
          {{ store.state.generatedRecipe.title_jp[recipeId] }}
        </h1>
        <p class="recipe-copy">
          {{ store.state.generatedRecipe.catchcopy[recipeId] }}
        </p>
      </div>

      <ul class="recipe-ave">
        <li>
          <img src="/time-icon.jpg" alt="" />調理時間：{{
            store.state.generatedRecipe.time[recipeId]
          }}
        </li>
        <li>
          <img src="/cutlery-icon.jpg" alt="" />カロリー：{{
            store.state.generatedRecipe.kcal[recipeId]
          }}kcal
        </li>
        <li>
          <img src="/star-icon.jpg" alt="" />難易度：{{
            store.state.generatedRecipe.difficulty[recipeId]
          }}
        </li>
      </ul>

      <div class="material">
        <h2>材料</h2>
        <div v-for="(name, i) in recipeData.ingredients" class="ingredient">
          <p>{{ name }}</p>
          <p>{{ recipeData.amount[i] }}</p>
        </div>
      </div>

      <div class="recipe-guide">
        <h2>作り方</h2>
        <ol>
          <li v-for="instruction in recipeData.cooking_instructions">
            {{ instruction }}
          </li>
        </ol>
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
  margin-left: 121px;
}

.select-title {
  max-width: 353px;
  margin: 0 auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: start;
}

.container {
  max-width: 353px;
  margin-top: 0px;
  margin: 0px auto 0;
}

/* こっから下にコーディングしてください */
/* 上も修正必要であればいじってもらって大丈夫 */

.recipe-photo img {
  display: block;
  width: 100vw;
  margin-top: 65px;
  margin-bottom: 0px;
}

.recipe-name {
  font-size: 20px;
  color: #ef797b;
  font-weight: 700;
  margin-bottom: 12px;
}

.recipe-copy {
  font-size: 14px;
  color: #442a00;
  font-weight: 500;
  margin-bottom: 25px;
}

.recipe-info {
  margin-top: 28px;
  border-bottom: 1px solid #ececec;
}

.recipe-ave {
  margin-top: 22px;
  border-bottom: 1px solid #ececec;
  padding-bottom: 24px;
  list-style: none;
}
.recipe-ave img {
  width: 18px;
  height: 18px;
}

.recipe-ave li {
  font-size: 14px;
  color: #442a00;
  font-weight: 400;
  margin-bottom: 8px;
  display: flex;
}

.recipe-ave img {
  margin-right: 11px;
}

.material h2 {
  font-size: 16px;
  color: #ef797b;
  font-weight: 700;
  margin-top: 24px;
}

.ingredient {
  margin-top: 12px;
  font-size: 14px;
  color: #442a00;
  font-weight: 500;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.material {
  margin-bottom: 24px;
  border-bottom: 1px solid #ececec;
  padding-bottom: 24px;
}

.recipe-guide h2 {
  font-size: 16px;
  color: #ef797b;
  font-weight: 700;
  margin-top: 28px;
  margin-bottom: 12px;
}

.recipe-guide ol {
  counter-reset: my-counter;
  list-style: none;
  padding: 0;
}

.recipe-guide li {
  margin-bottom: 18px;
  padding-left: 27px;
  position: relative;
  padding-bottom: 16px;
  border-bottom: 1px solid #ececec;
  font-size: 14px;
  font-weight: 400;
  color: #442a00;
}

.recipe-guide li:last-child {
  border-style: none;
}

.recipe-guide li:before {
  content: counter(my-counter);
  counter-increment: my-counter;
  background-color: #ef797b;
  color: #ffffff;
  display: block;
  float: left;
  line-height: 26px;
  margin-left: -30px;
  text-align: center;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  margin-right: 20px;
  font-weight: 700;
}

.recipe-guide {
  margin-bottom: 100px;
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
