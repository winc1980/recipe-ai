<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { detectFoods } from '../features/detectFoods';
import { getImage } from '../features/getImage';

// ルーター
const router = useRouter();
// ストア
const store = useStore();
// 進捗バー
const progressVisible = ref(false);

// 冷蔵庫内の画像アップロード
const imageUpload = (e) => {
  console.log('imageUpload...');
  progressVisible.value = true;
  const files = e.target.files || e.dataTransfer.files;
  const reader = new FileReader();
  reader.onload = async (event) => {
    const b64Image = event.currentTarget.result;
    // 食材を検出する
    const foods = await detectFoods(b64Image);
    console.log(foods); // {foods_jp: array, foods_en: array}

    // サムネイル画像の取得 wikimedia
    let foodThumbnails = [];
    for (const query of foods.foods_en) {
      foodThumbnails.push(await getImage(query));
    }
    // ストアに保存
    store.commit('addFoods', {
      jp: foods.foods_jp,
      en: foods.foods_en,
      thumbnail: foodThumbnails,
    });

    console.log('遷移中...');
    router.push({ name: 'FoodSelect' });
  };
  reader.readAsDataURL(files[0]);
};
</script>

<template>
  <div :class="progressVisible ? 'loading' : ''">
    <progress class="progress is-small is-primary" max="100">15%</progress>
  </div>
  <header>
    <div class="title">
      <img src="/recipe-ai.png" alt="" />
    </div>
  </header>
  <main>
    <div class="container">
      <div class="recommend-recipe">
        <div class="recommend-recipe-title">
          <img class="reco-icon" src="/thumbsup.png" alt="" />
          <h2>おすすめのレシピ</h2>
        </div>
        <div class="recipe">
          <img src="/recipe1.png" alt="" />
          <div>
            <h3>卵とトマトの中華風炒め</h3>
            <p>卵とトマトは意外と合います。彩りも良い一品です。。</p>
          </div>
        </div>
        <div class="recipe">
          <img src="/recipe2.png" alt="" />
          <div>
            <h3>納豆とピーマンの和えもの</h3>
            <p>これを作れば、ピーマン嫌いな人が減ります。</p>
          </div>
        </div>
        <div class="recipe">
          <img src="/recipe3.png" alt="" />
          <div>
            <h3>牛乳のクリームシチュー</h3>
            <p>
              じっくり煮込んだかのような、深い味わいが口いっぱいに広がります。
            </p>
          </div>
        </div>
      </div>
      <div class="seasonal-recipe">
        <div class="seasonal-recipe-title">
          <img class="season-icon" src="/flower.png" alt="" />
          <h2>季節のレシピ</h2>
        </div>

        <div class="recipe">
          <img src="/recipe4.png" alt="" />
          <div>
            <h3>塩ちゃんこ鍋</h3>
            <p>力士たちが毎日のように食べるあの味！ボリューム満点です。</p>
          </div>
        </div>
        <div class="recipe">
          <img src="/recipe4.png" alt="" />
          <div>
            <h3>かつおだし香るお雑煮</h3>
            <p>
              お正月にお餅買いすぎちゃったと思っているそこのあなた！この味を知ってしまえば、一瞬で餅が消えます。
            </p>
          </div>
        </div>
        <div class="recipe">
          <img src="/recipe4.png" alt="" />
          <div>
            <h3>濃厚ガトーショコラ</h3>
            <p>甘いものが食べたくなるこの季節にぴったりのデザートです。</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="jump-button">
      <label class="image-jump-button">
        <input type="file" name="file" @change="imageUpload" />
        <img src="/image-icon.png" alt="" />
        画像で食材を入力
      </label>
    </div>
  </footer>
</template>

<style scoped>
p {
  margin: 0;
}

.container {
  max-width: 390px;
  margin: 0 auto;
  padding-bottom: 122px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background-color: #ffffff;
}

.title {
  height: 71px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ececec;
}

.container {
  margin-top: 102px;
}

.recommend-recipe,
.seasonal-recipe {
  max-width: 353px;
  margin: 0 auto;
}

.recommend-recipe-title {
  display: flex;
  justify-content: left;
  color: #442a00;
}

.recommend-recipe-title img,
.seasonal-recipe-title img {
  margin-right: 13px;
}

h2 {
  line-height: 26px;
}

.recipe {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ececec;
  margin-bottom: 20px;
  margin-top: 21px;
  padding-bottom: 20px;
}

h3 {
  color: #442a00;
  margin-top: 3px;
  font-weight: 700;
  margin-bottom: 6px;
}

p {
  color: #908574;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.6;
}

.recipe img {
  width: 113px;
  height: 72px;
  margin-right: 21px;
  object-fit: cover;
  flex-shrink: 0;
}
.reco-icon,
.season-icon {
  display: block;
  width: 26px;
  height: 26px;
}
.seasonal-recipe-title {
  display: flex;
  justify-content: left;
  color: #442a00;
  margin-top: 33px;
  align-items: center;
}

.jump-button {
  display: flex;
  justify-content: center;
}

.image-jump-button {
  background-color: #ef797b;
  color: #ffffff;
  width: 302px;
  height: 45px;
  line-height: 45px;
  border-radius: 23rem;
  border: none;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 17px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type='file'] {
  display: none;
}

.word-jump-button {
  background-color: #ffffff;
  color: #ef797b;
  width: 302px;
  height: 45px;
  border-radius: 23rem;
  border: 2px solid #ef797b;
  margin-bottom: 28px;
  font-size: 14px;
  text-align: center;
}

.image-jump-button img,
.word-jump-button img {
  width: 18px;
  height: 18px;
  margin-right: 18px;
  margin-top: 2px;
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
