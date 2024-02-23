import { openai } from '../openaiClient';

// レシピを生成する
export const generateRecipe = async () => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: '',
      },
    ],
    model: 'gpt-4-0125-preview',
  });
  return chatCompletion.choices[0].message.content;
};
