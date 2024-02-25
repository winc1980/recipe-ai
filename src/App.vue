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
  <div>
    <label>Wikimediaから画像を取得する</label>
    <input type="text" v-model="searchQuery" />
    <input type="button" value="get image" @click="getThumbnailUrl()" />
    <p>result: {{ thumbnailUrl }}</p>
  </div>
</template>

<style scoped></style>
