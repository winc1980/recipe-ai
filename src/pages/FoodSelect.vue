<script setup></script>
<template>
  <header>
    <div class="select-title">
      <img src="/arrow.png" alt="" />
      <span>食材選択</span>
    </div>
  </header>
  <main>
    <div class="container">
      <p>5品の食材を取得しました。</p>
      <div>
        <h1>食材を選択してください</h1>
      </div>

      <div>
        <div class="select-image">
          <li class="active">
            <img src="/recipe1.png" alt="" />
            <p>きゅうり</p>
          </li>
          <li>
            <img src="/Milk_glass.png" alt="" />
            <p>納豆</p>
          </li>
          <li>
            <img src="/potato.png" alt="" />
            <p>じゃがいも</p>
          </li>
        </div>

        <div class="select-image">
          <li>
            <img src="/milk.png" alt="" />
            <p>牛乳</p>
          </li>
          <li>
            <img src="/salt.png" alt="" />
            <p>塩</p>
          </li>
          <li>
            <img src="/400px-Table_salt_with_salt_shaker_V1.png" alt="" />
            <p>チーズ</p>
          </li>
        </div>
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
      <button class="word-jump-button">
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
  margin-top: 20px;
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
  justify-content: space-around;
}

.select-image {
  margin-bottom: 13px;
}

.select-image p {
  color: #000000;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 21px;
  display: flex;
  justify-content: space-around;
}

.select-image li {
  list-style: none;
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
  font-weight: 500;
  padding-top: 17px;
  padding-bottom: 15px;
  margin-left: 12px;
}

.list input {
  color: #ded6ca;
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
