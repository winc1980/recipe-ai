import { openai } from '../openaiClient';

// レシピを生成する
export const generateRecipeDetail = async (recipeName) => {
  console.log('レシピの詳細を生成中...');
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-4-0613',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `${recipeName}\nこのレシピに必要な1人前の材料を考えてください。また、ステップバイステップでこのレシピを作るための手順を考えてください。最後に、recipe関数を呼び出して終了します。`,
          },
        ],
      },
    ],
    functions: [
      {
        name: 'recipe',
        parameters: {
          type: 'object',
          properties: {
            ingredients: {
              type: 'array',
              description:
                'このプロパティにはレシピに必要な材料のリストを渡します。',
              items: {
                type: 'string',
              },
            },
            amount: {
              type: 'array',
              description:
                'このプロパティには材料の使用量をリストで渡します。例えば、1-2個、小さじ1/2、3本など。',
              items: {
                type: 'string',
              },
            },
            cooking_instructions: {
              type: 'array',
              description:
                'このプロパティにはレシピを作るための手順をリストで渡します。手順の順番はリストの手前から始まることに注意してください。',
              items: {
                type: 'string',
              },
            },
          },
          required: ['ingredients', 'amount', 'cooking_instructions'],
        },
      },
    ],
    function_call: {
      name: 'recipe',
    },
    max_tokens: 1000,
  });
  return JSON.parse(chatCompletion.choices[0].message.function_call.arguments);
};
