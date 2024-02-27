<p align="center">
    <img width="500" src="./docs/images/recipe-ai-logo.png" /><br />
    <strong align="center">今晩の料理は何にしますか？ RECIPE AI ならあなたの冷蔵庫の写真から最適なレシピを提案いたします。</strong><br />
    <p align="center">HPチーム春合宿2024年 グループ3 作品</p>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/3-Vue.js-4FC08D.svg?logo=vue.js&style=plastic">
  <img src="https://img.shields.io/badge/20-Node.js-339933.svg?logo=node.js&style=plastic">
  <img src="https://github.com/winc1980/recipe-ai/actions/workflows/deploy-gh-pages.yml/badge.svg">
</p>

## アプリの特徴

- **冷蔵庫内の写真から食材を検出する**
- **レシピの提案**
  - 最適なレシピを提案します。その他にも「料理時間」や「難易度」、「カロリー」などの情報もすぐに確認できます。
- **レシピの詳細**

## スクリーンショット

![](./docs/images/screenshot.png)

## 拡張機能

- Volar
- Prettier - Code formatter

## セットアップ

1. `.env.sample`をコピーして、`.env.local`として保存する。
2. `VITE_OPENAI_KEY=`にOpenAIのキーを入力する。

3. パッケージのインストール

```bash
npm install
```

## 実行

```bash
npm run dev
```
