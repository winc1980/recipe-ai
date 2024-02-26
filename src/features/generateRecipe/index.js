import { openai } from '../openaiClient';

// レシピを生成する
export const generateRecipe = async () => {
  console.log('レシピを生成中...');
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-4-0125-preview',
    messages: [
      {
        role: 'user',
        content: '',
      },
    ],
    
  });
  return chatCompletion.choices[0].message.content;
};
