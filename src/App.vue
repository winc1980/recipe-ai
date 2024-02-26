<script setup>
import { ref } from 'vue';
import { detectFoods } from './features/detectFoods';
import { getImage } from './features/getImage';
import Home from './pages/Home.vue';

const searchQuery = ref(''); // 検索キーワード変数
const thumbnailUrl = ref(''); // サムネイルURL変数

// サムネイルURLを取得する
const getThumbnailUrl = async () => {
  let url = await getImage(searchQuery.value);
  console.log(url);
  thumbnailUrl.value = url;
};

const imageUpload = (e) => {
  changePage('foodSelect');
  const files = e.target.files || e.dataTransfer.files;
  const reader = new FileReader();
  reader.onload = async (event) => {
    const b64Image = event.currentTarget.result;
    // 食材を検出する
    const res = await detectFoods(b64Image);
    console.log(res); // {foods_jp: array, foods_en: array}
  };
  reader.readAsDataURL(files[0]);
};
</script>

<template>
  <Home />
</template>

<style scoped></style>
