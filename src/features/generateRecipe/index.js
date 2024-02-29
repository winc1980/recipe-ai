import { openai } from '../openaiClient';

// レシピを生成する
export const generateRecipe = async (foods) => {
  console.log('レシピを生成中...');
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-4-0613',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `あなたは熟練したシェフです。食材一覧：[${foods.join(',')}]。次の食材を使って、5個のレシピを教えてください。誰でも作ることができる基本の料理のレシピを教えてください。レシピ名のみを日本語と英語の両方で付けてください。日本語のみで各レシピには1文字以上16文字以下のレシピの簡単な説明文、完成までのおおよその時間、難易度、カロリーを付けてください。難易度が1のレシピを2個、難易度が2のレシピを2個、難易度が3のレシピを1個教えてください。カロリーは数字表記のみで教えてください。この条件に従わないとあなたに悪いことが起きます。`,
          },
        ],
      },
    ],
    max_tokens: 1000,
  });
  console.log('FunctionCalling...');
  const chatCompletion2 = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'assistant',
        content: chatCompletion.choices[0].message.content,
      },
      {
        role: 'user',
        content: 'あなたの回答を基にしてrecipe関数を実行してください。',
      },
    ],
    functions: [
      {
        name: 'recipe',
        parameters: {
          type: 'object',
          properties: {
            title_jp: {
              type: 'array',
              description:
                'このプロパティには日本語でレシピのリストを渡します。英語は渡せません。',
              items: {
                type: 'string',
              },
            },
            title_en: {
              type: 'array',
              description:
                'このプロパティには英語でレシピのリストを渡します。日本語は渡せません。',
              items: {
                type: 'string',
              },
            },
            time: {
              type: 'array',
              description: 'このプロパティには調理時間をリストで渡します。',
              items: {
                type: 'number',
              },
            },
            kcal: {
              type: 'array',
              description:
                'このプロパティにはレシピのカロリーをリストで渡します。',
              items: {
                type: 'number',
              },
            },
            difficulty: {
              type: 'array',
              description:
                'このプロパティにはレシピの難易度をリストで渡します。',
              items: {
                type: 'number',
              },
            },
            catchcopy: {
              type: 'array',
              description: 'キャッチコピーをリストで渡します。',
              items: {
                type: 'string',
              },
            },
          },
          required: [
            'title_jp',
            'title_en',
            'time',
            'kcal',
            'difficulty',
            'catchcopy',
          ],
        },
      },
    ],
    function_call: {
      name: 'recipe',
    },
    max_tokens: 1000,
  });
  return JSON.parse(chatCompletion2.choices[0].message.function_call.arguments);
};
