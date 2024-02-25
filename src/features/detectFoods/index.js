import { openai } from '../openaiClient';

// 冷蔵庫から食材を検出する
export const detectFoods = async (b64Image) => {
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: '' },
          {
            type: 'image_url',
            image_url: {
              url: `data:image/jpeg;base64,${b64Image}`,
            },
          },
        ],
      },
    ],
    function_call: 'auto',
    functions: [
      {
        name: 'foods',
        description: 'この関数を呼び出すと、食材のリストを作成します。',
        parameters: {
          type: 'object',
          properties: {
            foods: {
              type: 'array',
              description:
                'このプロパティにはスクリーンショットから抽出した食材の一覧を含める。',
              items: {
                type: 'string',
              },
            },
            required: ['foods'],
          },
        },
      },
    ],
  });
  return chatCompletion.choices[0].message.content;
};
