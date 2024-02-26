import { openai } from '../openaiClient';

// 冷蔵庫から食材を検出する
export const detectFoods = async (b64Image) => {
  console.log('画像から食品を検出中...');
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'この画像を上から順に詳しく見て下さい。冷蔵庫の中にあるものを分析して下さい。上から日本語と英語で書き出してください。箇条書きで書き出してください。',
          },
          {
            type: 'image_url',
            image_url: {
              url: b64Image,
            },
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
        content: 'あなたの回答を基にしてfoods関数を実行してください。',
      },
    ],
    functions: [
      {
        name: 'foods',
        parameters: {
          type: 'object',
          properties: {
            foods_jp: {
              type: 'array',
              description:
                'このプロパティには日本語で食品のリストを渡します。英語は渡せません。',
              items: {
                type: 'string',
              },
            },
            foods_en: {
              type: 'array',
              description:
                'このプロパティには英語で食品のリストを渡します。日本語は渡せません。',
              items: {
                type: 'string',
              },
            },
          },
          required: ['foods_jp', 'foods_en'],
        },
      },
    ],
    function_call: 'auto',
    max_tokens: 1000,
  });
  return JSON.parse(chatCompletion2.choices[0].message.function_call.arguments);
};
