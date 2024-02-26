<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// ルーター
const router = useRouter();
// ストア
const store = useStore();

const select = (item, i) => {
  console.log('toggle select:', item, i);
  if (store.state.selectedFoods.includes(item)) {
    store.commit('unSelectFood', item);
  } else {
    store.commit('selectFood', item);
  }
  console.log('update:', store.state.selectedFoods);
};
</script>

<template>
  <header>
    <div class="select-title">
      <img src="/arrow.png" alt="" />
      <span>食材選択</span>
    </div>
  </header>
  <p></p>
  <main>
    <div class="container">
      <p>5品の食材を取得しました。</p>
      <div>
        <h1>食材を選択してください</h1>
      </div>

      <div>
        <ul class="select-image">
          <li
            v-for="(item, i) in store.state.foods.jp"
            :class="store.state.selectedFoods.includes(item) ? 'active' : ''"
          >
            <img
              :src="store.state.foods.thumbnail[i]"
              alt=""
              @click="select(item, i)"
            />
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="list">
      <div class="list-text">
        <h2>追加で食材を入力</h2>
        <ul>
          <li><p>豚のひき肉</p></li>
          <li><p>しょうゆ</p></li>
          <li><p>a</p></li>
          <li><p>a</p></li>
          <li><p>a</p></li>
          <li><p>a</p></li>
          <li><p>a</p></li>
          <li>
            <input type="text" placeholder="ここに食材を入力してください" />
          </li>
        </ul>
      </div>
    </div>
  </main>
  <footer>
    <div class="jump-button">
      <button
        class="word-jump-button"
        @click="router.push({ name: 'RecipeList' })"
      >
        <span>決定する</span>
      </button>
    </div>
  </footer>
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
  z-index: 3;
}

header img {
  width: 12px;
}

header span {
  color: #442a00;
  font-size: 18px;
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
  margin-top: 102px;
  margin: 102px auto 0;
}

.container p {
  margin-top: 26px;
  color: #442a00;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 23px;
}

h1 {
  color: #ef797b;
  font-size: 18px;
  text-align: center;
  margin-bottom: 29px;
}

.select-image {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.select-image {
  margin-bottom: 13px;
}

.select-image p {
  color: #442A00;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 21px;
  display: flex;
  justify-content: space-around;
  width: 106px; /* 省略せずに表示するサイズを指定 */
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-align: center;
}

.select-image li {
  list-style: none;
  color: #442A00;
}

.select-image li img {
  border-radius: 50%;
  width: 106px;
  height: 106px;
  object-fit: cover;
  border: 6px solid #9e9e9e;
  padding: 3px;
  opacity: 50%;
}

.select-image li.active img {
  border-radius: 50%;
  width: 106px;
  height: 106px;
  object-fit: cover;
  border: 6px solid #ef797b;
  padding: 3px;
  opacity: 100%;
}

.list {
  background-color: #fff4f5;
  width: 100vw;
  padding-bottom: 32px;
}

.list-text {
  max-width: 353px;
  margin: 0 auto;
  margin-bottom: 110px;
  
}
.list ul li {
  list-style: none;
  border-bottom: 1px solid #ded6ca;
}

.list p,
.list input {
  color: #442a00;
  font-weight: 500;
  padding-top: 17px;
  padding-bottom: 15px;
  margin-left: 12px;
}

.list input {
  color: #442a00;
  width: 100%;
}

.list input::placeholder {
  color: #7a6c56;
}

h2 {
  text-align: center;
  color: #442a00;
  font-size: 18px;
  padding-top: 34px;
  padding-bottom: 26px;
  border-bottom: 1px solid #ded6ca;
}

.jump-button {
  display: flex;
  justify-content: center;
  height: 110px;
}

.word-jump-button {
  background-color: #ef797b;
  color: #ffffff;
  width: 302px;
  height: 45px;
  border-radius: 23rem;
  border: none;
  font-size: 14px;
  margin: 32px auto;
  text-align: center;
}

footer {
  border-top: 1px solid #ececec;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background-color: #ffffff;
}
</style>
