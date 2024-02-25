<script setup>
import { ref } from 'vue';

import { getImage } from './features/getImage';
const searchQuery = ref(''); // 検索キーワード変数
const thumbnailUrl = ref(''); // サムネイルURL変数

// サムネイルURLを取得する
const getThumbnailUrl = async () => {
  let url = await getImage(searchQuery.value);
  console.log(url);
  thumbnailUrl.value = url;
};
</script>

<template>
  <header>
    <div class="title">
      <img src="/recipe-ai.png" alt="">
    </div>
  </header>
  <main>
    <div class="container">
      <div class="recommend-recipe">
        <div class="recommend-recipe-title">
          <img src="/thumbsup.png" alt="">
          <h2>おすすめのレシピ</h2>
        </div>
        <div class="recipe">
          <img src="/recipe1.png" alt="">
          <div>
            <h3>卵とトマトの中華風炒め</h3>
            <p>卵とトマトの中華風炒めはいかがでしょうか。</p>
          </div>
        </div>
        <div class="recipe">
          <img src="/recipe2.png" alt="">
          <div>
            <h3>納豆とピーマンの和えもの</h3>
            <p>卵とトマトの中華風炒めはいかがでしょうか。</p>
          </div>
        </div>
        <div class="recipe">
          <img src="/recipe3.png" alt="">
          <div>
            <h3>牛乳のクリームシチュー</h3>
            <p>卵とトマトの中華風炒めはいかがでしょうか。</p>
          </div>
        </div>
      </div>
      <div class="seasonal-recipe">
        <div class="seasonal-recipe-title">
          <img src="/flower.png" alt="">
          <h2>季節のレシピ</h2>
        </div>

        <div class="recipe">
          <img src="/recipe4.png" alt="">
          <div>
            <h3>卵とトマトの中華風炒め卵とトマトの中華風炒め卵とトマトの中華風炒め</h3>
            <p>卵とトマトの中華風炒めはいかがでしょうか。</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="jump-button">
      <label class="image-jump-button">
        <input type="file" name="file">
        <img src="/image-icon.png" alt="">
        画像で食材を入力
      </label>
    </div>
    <div class="jump-button">
      <button class="word-jump-button">
        <img src="/word-icon.png" alt="">
        <span>文字で食材を入力</span>
      </button>
    </div>
  </footer>
</template>

<style scoped>


p {
    margin: 0;
}

.container{
    max-width: 390px;
    margin: 0 auto;
    padding-bottom: 7rem;
}

header{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    background-color: #FFFFFF;
}

.title{
    height: 71px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ECECEC;
}

.container{
    margin-top: 102px;
}

.recommend-recipe,.seasonal-recipe{
    max-width: 353px;
    margin: 0 auto;
}

.recommend-recipe-title{
    display: flex;
    justify-content: left;
    color: #442A00;
}

.recommend-recipe-title img,.seasonal-recipe-title img{
    margin-right: 13px;
}

h2{
    line-height: 26px;
}

.recipe{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ECECEC;
    margin-bottom: 20px;
    margin-top: 21px;
    padding-bottom: 20px;
}

h3{
    color: #442A00;
    margin-top: 3px;
    font-weight: 700;
}

p{
    color: #908574;
    font-size: 12px;
}

.recipe img{
    width: 113px;
    height: 72px;
    margin-right: 21px;
    object-fit: cover;
    flex-shrink: 0;

}
.seasonal-recipe-title{
    display: flex;
    justify-content: left;
    color: #442A00;
    margin-top: 33px;
    align-items: center;
}

.jump-button{
    display: flex;
    justify-content: center;
}

.image-jump-button{
    background-color: #EF797B;
    color: #FFFFFF;
    width: 302px;
    height: 45px;
    border-radius: 23rem;
    border: none;
    margin-top: 30px;
    margin-bottom: 17px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

input[type="file"] {
    display: none;
}

.word-jump-button{
    background-color: #FFFFFF;
    color: #EF797B;
    width: 302px;
    height: 45px;
    border-radius: 23rem;
    border: 2px solid #EF797B;
    margin-bottom: 28px;
    font-size: 14px;
    text-align: center;
}

.image-jump-button img,.word-jump-button img{
    margin-right: 18px;
}

footer{
    border-top: 1px solid #ECECEC;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    background-color: #FFFFFF;
    
}
</style>
