<script setup>
import { ref } from 'vue';
import { detectFoods } from './features/detectFoods';
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
  <router-view />
</template>

<style scoped></style>
