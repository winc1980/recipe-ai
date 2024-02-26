import OpenAI from 'openai';

export const openai = new OpenAI({
  //apiKey: import.meta.env.VITE_OPENAI_KEY,
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});
