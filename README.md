# free-diffusion

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Reverse engineering API of stablediffusion3.net

## Examples

<div style="display: flex; flex-direction: row; justify-content: center;">
    <img src=".github/example1.png" style="width: 400px; height: 300px;">
    <img src=".github/example2.png" style="width: 400px; height: 300px;">
</div>

## Installation

```shell
npm install free-diffusion
```

## Usage

### Get Unique ID

```ts
import { refreshUniqueId } from "free-diffusion";

const uniqueId = await refreshUniqueId();
```

### Generate Image

```ts
import { freeDiffusion } from "free-diffusion";

const recordUuid = await freeDiffusion({
  prompt: "A cute bikini girl with a stylish body is standing on the beach",
  negativePrompt: "no face, extra limbs, low quality",
  model: "tamarin",
  size: "4:3",
  batchSize: 1,
  uniqueId: "<unique-id>",
});
```

### Check Generation Status

Image url will appear in status json data if picture generation is completed.

```ts
import { checkStatus } from "free-diffusion";

const status = await checkStatus("<record-uuid>", "<unique-id>");
```

types:

```ts
export interface FreeDiffusionRequest {
  prompt: string;
  negativePrompt?: string;
  model?: "flux" | "tamarin" | "superAnime" | "visiCanvas";
  size?: "1:1" | "3:4" | "4:3";
  uniqueId: string; // required
  batchSize?: number; // number of picture
}
```

Succeeded generating status:

```json
{
  "id": 2167739,
  "picPrompt": "A cute bikini girl with a stylish body is standing on the beach",
  "picPromptExecuted": "A cute bikini girl with a stylish body is standing on the beach",
  "picParam": "{\"batchSize\":1,\"model\":\"tamarin\",\"negativePrompt\":\"no face, extra limbs, low quality\",\"prompt\":\"A cute bikini girl with a stylish body is standing on the beach\",\"size\":\"4:3\"}",
  "picUrl": "[{\"deleteFlag\":0,\"picUrl\":\"https://file.aiquickdraw.com/s/1769929755_80e4195103d740a3bac4109d3fb8aefb.png\"}]",
  "generateTime": "1769929706",
  "generateCompleteTime": "2026-02-01 15:09:18",
  "createDate": "2026-02-01 15:08:20",
  "createTimeSeconds": 1769929700,
  "picState": "success",
  "expireFlag": 0,
  "batchSize": 1,
  "changeBatchSize": 0,
  "type": "sd",
  "upscaleIndex": "",
  "upscaleFlag": 0,
  "failCode": ""
}
```

## Test

Using Vitest.

```shell
pnpm run test test/index.test.ts:<line_number>
```

## License

[MIT](./LICENSE) License © 2026-PRESENT [Vincent-the-gamer](https://github.com/Vincent-the-gamer)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/free-diffusion?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/free-diffusion
[npm-downloads-src]: https://img.shields.io/npm/dm/free-diffusion?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/free-diffusion
[bundle-src]: https://img.shields.io/bundlephobia/minzip/free-diffusion?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=free-diffusion
[license-src]: https://img.shields.io/github/license/Vincent-the-gamer/free-diffusion.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/Vincent-the-gamer/free-diffusion/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/free-diffusion
