import { axios } from "./axios"
import { FreeDiffusionRequest } from "./types";

/**
 * refreshUniqueId
 * @returns uniqueId
 */
export async function refreshUniqueId() {
  const { data } = await axios.get('https://api.stablediffusion3.net/api/auth/unique-id?canvas=-1574096571');
  return data.data;
}

/**
 * fastDiffusion
 * @returns recordUuid, use this to check generating status
 */
export async function freeDiffusion(params: FreeDiffusionRequest) {
  const { prompt, negativePrompt, model, size, batchSize, uniqueId } = params
  const { data } = await axios.post('https://api.stablediffusion3.net/api/v1/generate/create', {
    prompt,
    negativePrompt: negativePrompt || '',
    model: model || 'flux',
    size: size || '4:3',
    batchSize: batchSize || 1
  }, {
    headers: {
      'UniqueId': uniqueId
    }
  });

  const recordUuid = data.data.recordUuid
  return recordUuid
}

/**
 * checkStatus
 * @param recordUuid
 * @param uniqueId
 * @returns Json response, if picState === 'success', then you can get the image url.
 */
export async function checkStatus(recordUuid: string, uniqueId: string) {
  const { data } = await axios.get(`https://api.stablediffusion3.net/api/v1/generate/record-detail?recordUuid=${recordUuid}`, {
    headers: {
      'UniqueId': uniqueId
    }
  });
  return data.data;
}

export * from "./types"