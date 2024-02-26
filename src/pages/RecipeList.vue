<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
</script>

<template>
  <header>
    <div class="select-title">
      <img src="/arrow.png" alt="" />
      <span>あなたにオススメのレシピ</span>
    </div>
  </header>
  <main>
    <div class="result">
      <ul>
        <li>きゅうり</li>
        <li>牛乳</li>
        <li>納豆</li>
        <li>チーズ</li>
        <li>トマト</li>
      </ul>
    </div>

    <div class="recipe">
      <img src="/image1.png" alt="" />
      <div class="recipe-text">
        <div class="recipe-title">
          <h2>やみつきうどん</h2>
          <p>レンジで簡単！栄養満点うどん</p>
        </div>
        <div class="clock">
          <img src="/clock.png" alt="" />
          <span>調理時間:15分以下</span>
        </div>
        <div class="kcal">
          <img src="/kcal.png" alt="" />
          <span>カロリー:660kcal</span>
        </div>
        <div class="star">
          <img src="/star.png" alt="" />
          <span>難易度　：難しい</span>
        </div>
      </div>
    </div>
    <div class="recipe">
      <img src="/image2.png" alt="" />
      <div class="recipe-text">
        <div class="recipe-title">
          <h2>卵とトマトの</h2>
          <p>レンジで簡単！栄養満点うどん</p>
        </div>
        <div class="clock">
          <img src="/clock.png" alt="" />
          <span>調理時間:15分以下</span>
        </div>
        <div class="kcal">
          <img src="/kcal.png" alt="" />
          <span>カロリー:660kcal</span>
        </div>
        <div class="star">
          <img src="/star.png" alt="" />
          <span>難易度　：難しい</span>
        </div>
      </div>
    </div>
    <div class="recipe">
      <img src="/image2.png" alt="" />
      <div class="recipe-text">
        <div class="recipe-title">
          <h2>回鍋肉</h2>
          <p>レンジで簡単！栄養満点うどん</p>
        </div>
        <div class="clock">
          <img src="/clock.png" alt="" />
          <span>調理時間:15分以下</span>
        </div>
        <div class="kcal">
          <img src="/kcal.png" alt="" />
          <span>カロリー:660kcal</span>
        </div>
        <div class="star">
          <img src="/star.png" alt="" />
          <span>難易度　：難しい</span>
        </div>
      </div>
    </div>
    <div class="recipe">
      <img src="/image1.png" alt="" />
      <div class="recipe-text">
        <div class="recipe-title">
          <h2>やみつきうどん</h2>
          <p>レンジで簡単！栄養満点うどん</p>
        </div>
        <div class="clock">
          <img src="/clock.png" alt="" />
          <span>調理時間:15分以下</span>
        </div>
        <div class="kcal">
          <img src="/kcal.png" alt="" />
          <span>カロリー:660kcal</span>
        </div>
        <div class="star">
          <img src="/star.png" alt="" />
          <span>難易度　：難しい</span>
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
  max-width: 353px;
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
  max-width: 205px;
  text-align: left;
  margin: 0 auto;
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
</style>
