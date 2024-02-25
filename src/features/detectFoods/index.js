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
        content: '',
      },
    ],
    function_call: ['foods'],
    functions: [
      {
        name: 'foods',
        parameters: {
          type: 'object',
          properties: {
            foods: {
              type: 'array',
              description: '食品の一覧を与える。',
              items: {
                type: 'string',
              },
            },
          },
          required: ['foods'],
        },
      },
    ],
    max_tokens: 1000,
  });
};
