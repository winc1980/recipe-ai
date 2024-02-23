import { openai } from '../openaiClient';

// 冷蔵庫から食材を検出する
export const detectFoods = async (b64Image) => {
  const chatCompletion = await openai.chat.completions.create({
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
    model: 'gpt-4-vision-preview',
  });
  return chatCompletion.choices[0].message.content;
};
