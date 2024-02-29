<p align="center">
    <img width="500" src="./docs/images/recipe-ai-logo.png" /><br />
    <strong align="center">今晩の料理は何にしますか？ RECIPE AI ならあなたの冷蔵庫の写真から最適なレシピを提案いたします。</strong><br />
    <p align="center">HPチーム春合宿2024年 グループ3 作品</p>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-3-4FC08D.svg?logo=vue.js&style=plastic">
  <img src="https://img.shields.io/badge/Node.js-20-339933.svg?logo=node.js&style=plastic">
  <img src="https://github.com/winc1980/recipe-ai/actions/workflows/deploy-gh-pages.yml/badge.svg">
</p>

## Contributors✨

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/MORIMOTO520212">
          <img src="https://avatars.githubusercontent.com/u/28892090?v=4" /><br />
          <sub><b>Yuma Morimoto</b></sub></a><br />
            Backend
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/shuma1356">
          <img src="https://avatars.githubusercontent.com/u/118163728?v=4" /><br />
          <sub><b>Shuma Miyazaki</b></sub></a><br />
            Design / Frontend
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/momoka39">
          <img src="https://avatars.githubusercontent.com/u/133108363?v=4" /><br />
          <sub><b>Momoka</b></sub></a><br />
            Frontend
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="">
          <img src="https://avatars.githubusercontent.com/u/88756450?v=4" /><br />
          <sub><b>Yuria</b></sub></a><br />
            Prompt Engineering / Frontend
        </a>
      </td>
    </tr>
  </tbody>
</table>

https://github.com/winc1980/recipe-ai/assets/28892090/0fe57311-cb38-4745-a9c7-a4ded76f0393

## アプリの特徴

- **冷蔵庫内の写真から食材を選ぶ**
  - GPTの強力な推論能力を用いて冷蔵庫内の写真から食材を検出します。
- **レシピの提案**
  - 最適なレシピを提案します。その他にも「料理時間」や「難易度」、「カロリー」などの情報もすぐに確認できます。
- **レシピの詳細**
  - レシピの作り方を確認できます。

## アプリを使う

- [RECIPE AI](https://github.com/winc1980/recipe-ai) ここからアクセスしてください。

## ギャラリー

![](./docs/images/screenshot.png)

## 発表スライド

- [RECIPE AI - スプレッドシート](https://docs.google.com/presentation/d/1DjOlIZudJjSWRcH0Lxr76GAlmQN8k8mZbin61j_crFY/edit?usp=sharing)

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

## ビルド

```bash
npm run build
```
