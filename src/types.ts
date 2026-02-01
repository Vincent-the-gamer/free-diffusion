export interface FreeDiffusionRequest {
  prompt: string;
  negativePrompt?: string;
  model?: 'flux' | 'tamarin' | 'superAnime' | 'visiCanvas';
  size?: '1:1' | '3:4' | '4:3';
  uniqueId: string; // required
  batchSize?: number; // number of picture
}