import OpenAI from 'openai';
import { OPENAI_GPT_KEY } from './constent';

const client = new OpenAI({
  apiKey: OPENAI_GPT_KEY,
  dangerouslyAllowBrowser: true
});

export default client